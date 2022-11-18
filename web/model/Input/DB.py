import psycopg2
import json
from datetime import datetime, timedelta
from pprint import pprint

with open("setting.json", encoding="UTF-8") as f:
    SETTING = json.loads(f.read())
DataLoadingType = SETTING['MODULE']['DataLoadingType']
DBHost = SETTING['DB']['DBHost']
DBPort = SETTING['DB']['DBPort']
DBName = SETTING['DB']['DBName']
DBUser = SETTING['DB']['DBUser']
DBPwd = SETTING['DB']['DBPwd']
AssetTNM = SETTING['DB']['AssetTNM']
StatisticsTNM = SETTING['DB']['StatisticsTNM']
BS = SETTING['FILE']
today = datetime.today().strftime("%Y-%m-%d %H:%M:%S")
day = datetime.today().strftime("%Y-%m-%d")
yesterday = (datetime.today() - timedelta(1)).strftime("%Y-%m-%d")
twoago = (datetime.today() - timedelta(2)).strftime("%Y-%m-%d")

def plug_in(table, day, type):
    fiveDay = (datetime.today() - timedelta(5)).strftime("%Y-%m-%d")
    try:
        SDL = []
        Conn = psycopg2.connect('host={0} port={1} dbname={2} user={3} password={4}'.format(DBHost, DBPort, DBName, DBUser, DBPwd))
        Cur = Conn.cursor()
        if table == 'asset' :
            query = """
                select 
                    computer_id, disk_used_space, listen_port_count, established_port_count, asset_collection_date
                from
                    """ + AssetTNM + """
                where 
                    to_char(asset_collection_date, 'YYYY-MM-DD') = '""" + yesterday + """'
                    order by computer_id desc
                """
        if table == 'statistics' :
            if day == 'yesterday' :
                query = """ 
                    select 
                        classification, item, item_count, statistics_collection_date
                    from 
                        """ + StatisticsTNM + """ 
                    where 
                        to_char(statistics_collection_date, 'YYYY-MM-DD') = '""" + yesterday + """'
                    and 
                        NOT classification IN ('installed_applications_name')
                    """
            if day == 'fiveDay' :
                query = """ 
                    select 
                        classification,
                        item, 
                        item_count, 
                        statistics_collection_date
                    from 
                        """ + StatisticsTNM + """ 
                    where 
                        to_char(statistics_collection_date, 'YYYY-MM-DD') > '""" + fiveDay + """' 
                    and
                        classification = '"""+type+"""'
                    """

        Cur.execute(query)
        RS = Cur.fetchall()
        for R in RS:
            SDL.append(R)
        return SDL
    except:
        print(table+' Daily Table connection(Select) Failure')
        
def hyd_plug_in(table, data):
    try:
        SDL = []
        Conn = psycopg2.connect('host={0} port={1} dbname={2} user={3} password={4}'.format(DBHost, DBPort, DBName, DBUser, DBPwd))
        Cur = Conn.cursor()
        if table == 'sw1' :
            query = """
                select 
                    vulnerability_num, 
                    vulnerability_classification, 
                    vulnerability_code, 
                    vulnerability_item, 
                    vulnerability_explanation,
                    vulnerability_standard_good,
                    vulnerability_standard_weak,
                    to_char(vulnerability_create_date, 'YYYY-MM-DD')
                from
                    vulnerability_list
                where 
                	vulnerability_code like 'SW1%'
                    order by vulnerability_num
                """

        if table == 'SWV' :
            query = """
                select 
                    vulnerability_num, 
                    vulnerability_classification, 
                    vulnerability_code, 
                    vulnerability_item, 
                    vulnerability_explanation,
                    vulnerability_standard_good,
                    vulnerability_standard_weak,
                    to_char(vulnerability_create_date, 'YYYY-MM-DD')
                from
                    vulnerability_list
                where 
                	vulnerability_code = '""" + data + """'
                """
        Cur.execute(query)
        RS = Cur.fetchall()
        for R in RS:
            SDL.append(dict(
                        (
                            ('index', R[0]), 
                            ('SWV', R[2]), 
                            ('Title', R[3]), 
                            ('Text', R[4]),
                            ('Judge', [R[5], R[6]])
                            )
                            )
                    )
        return SDL
    except:
        print(table+' Daily Table connection(Select) Failure')

