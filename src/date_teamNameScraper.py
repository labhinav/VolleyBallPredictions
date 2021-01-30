# from urllib import urlopen
from bs4 import BeautifulSoup
from match import Match
import re
import sys
from operator import attrgetter
import pandas as pd

# url = "https://www.flashscore.in/volleyball/brazil/superliga-2010-2011/results"
# html=urlopen(url)
# text=html.read()

#change html file name
f=open("../html/FlashScore.in  SuperLiga 2018_2019 Results.html")
text=f.read()

res=re.findall("<div class=\"event__time\".*?<div id.*?>",text)
# print(res)
for i in range(len(res)):
    res[i]=re.sub("<.*?>","  ",res[i])
#LINE 24 IS ONLY FOR 2013-14!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! Pls comment it out for other seasons
#res.pop(1)

matches = [Match(i) for i in res] 
matches.reverse()
for i in matches:
    print(i)
    print('\n')
print(len(matches))
    

listdd=[]
listmm=[]
listyy=[]
list_home_team= []
list_away_team=[]


for match in matches:
    listdd.append(match.day)
    listmm.append(match.month)
    listyy.append(match.year)
    list_home_team.append(match.home_team)
    list_away_team.append(match.away_team)    
    
    
# print(sorted())
print("here2")
df = pd.DataFrame({
    'Date':listdd,
    'month':listmm,
    'year':listyy,
    'home_team':list_home_team,
    'away_team':list_away_team,
})
print("here3")
print(df.head())
#change csv file name



df.to_csv('../additionalMatchInfo/2018-19.csv')

    


    






