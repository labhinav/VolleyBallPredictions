import pandas as pd 
data=pd.read_csv('../data/total_data2.csv')
data=data.drop(['Date','month','year'],axis=1)
home_team=pd.get_dummies(data.home_team, prefix='Home')
away_team=pd.get_dummies(data.away_team, prefix='Away')
data=data.drop(['home_team','away_team'],axis=1)
frames = [data,home_team, away_team]
result = pd.concat(frames,axis=1)
result.to_csv('../data/total_data3.csv',index=False)
