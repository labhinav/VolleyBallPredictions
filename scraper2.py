# from urllib import urlopen
from bs4 import BeautifulSoup
from match import Match
import re
from team import Team
import sys
from operator import attrgetter
import pandas as pd
import pickle
# url = "https://www.flashscore.in/volleyball/brazil/superliga-2010-2011/results"
# html=urlopen(url)
# text=html.read()
def exponential_av(input,weight,old_val):
    return weight*input+old_val*(1-weight)
#change html file name
f=open("html/FlashScore.in_ SuperLiga 2011_2012 Results.html")
text=f.read()

res=re.findall("<div class=\"event__time\".*?<div id.*?>",text)
for i in range(len(res)):
    res[i]=re.sub("<.*?>","  ",res[i])

matches = [Match(i) for i in res] 
matches.reverse()
for i in matches:
    print(i)
    print('\n')
print(len(matches))
dict_file=open('dict_file.txt','rb')
global_dict=pickle.load(dict_file)
local_dict={}
#change no of teams
for i in range(12):
    team=input("Enter team name\n")
    last_year_pos=int(input("Last year position\n"))
    if(team in global_dict):
        local_dict[team]=global_dict[team]
        local_dict[team].reset(last_year_pos)
    else:
        local_dict[team]=Team(team,last_year_pos)

list1=[]
list2=[]
list3=[]
list4=[]
list5=[]
list6=[]
list7=[]
list8=[]
list9=[]
list10=[]
list11=[]
list12=[]
list13=[]
list14=[]
list15=[]
list16=[]
list17=[]
list18=[]
list19=[]
list20=[]
result=[]
print("here1")
for match in matches:
    list1.append(local_dict[match.home_team].average_points_per_set)
    list2.append(local_dict[match.away_team].average_points_per_set)
    list3.append(local_dict[match.home_team].average_points_against_per_set)
    list4.append(local_dict[match.away_team].average_points_against_per_set)
    list5.append(local_dict[match.home_team].current_position)
    list6.append(local_dict[match.away_team].current_position)
    list7.append(local_dict[match.home_team].last_year_position)
    list8.append(local_dict[match.away_team].last_year_position)
    list9.append(local_dict[match.home_team].performance_in_prev_game)
    list10.append(local_dict[match.away_team].performance_in_prev_game)
    list11.append(local_dict[match.home_team].form)
    list12.append(local_dict[match.away_team].form)
    list13.append(local_dict[match.home_team].home_form)
    list14.append(local_dict[match.away_team].away_form)
    delta1=(match.DATE-local_dict[match.home_team].last_game_date).days
    delta2=(match.DATE-local_dict[match.away_team].last_game_date).days
    list15.append(min(delta1,7))
    list16.append(min(delta2,7))
    if(match.away_team not in local_dict[match.home_team].h2h):
        local_dict[match.home_team].h2h[match.away_team]=0
        local_dict[match.away_team].h2h[match.home_team]=0
    list17.append(local_dict[match.home_team].h2h[match.away_team])
    list18.append(match.importance)
    list19.append(local_dict[match.home_team].percentage_of_wins_this_season)
    list20.append(local_dict[match.away_team].percentage_of_wins_this_season)
    diff=match.home_sets-match.away_sets
    winner=1
    if(diff<0):
        winner=0
    result.append(winner)
    #updates start now
    local_dict[match.home_team].average_points_per_set=exponential_av(match.home_av_points,0.2,local_dict[match.home_team].average_points_per_set)
    local_dict[match.away_team].average_points_per_set=exponential_av(match.away_av_points,0.2,local_dict[match.away_team].average_points_per_set)
    local_dict[match.home_team].average_points_against_per_set=exponential_av(match.away_av_points,0.2,local_dict[match.home_team].average_points_against_per_set)
    local_dict[match.away_team].average_points_against_per_set=exponential_av(match.home_av_points,0.2,local_dict[match.away_team].average_points_against_per_set)
    if(winner==1):
        local_dict[match.home_team].no_of_wins_this_season+=1
    else:
        local_dict[match.away_team].no_of_wins_this_season+=1
    local_dict[match.home_team].no_of_games_this_season+=1
    local_dict[match.away_team].no_of_games_this_season+=1
    local_dict[match.home_team].percentage_of_wins_this_season=local_dict[match.home_team].no_of_wins_this_season/local_dict[match.home_team].no_of_games_this_season*100
    local_dict[match.away_team].percentage_of_wins_this_season=local_dict[match.away_team].no_of_wins_this_season/local_dict[match.away_team].no_of_games_this_season*100
    sorted_list=sorted(local_dict.values(),key=attrgetter('no_of_wins_this_season'),reverse=True)
    for pos,item in enumerate(sorted_list,1):
        local_dict[item.name].current_position=pos
    local_dict[match.home_team].form=exponential_av(diff,0.2,local_dict[match.home_team].form)
    local_dict[match.away_team].form=exponential_av(-diff,0.2,local_dict[match.away_team].form)
    local_dict[match.home_team].home_form=exponential_av(diff,0.2,local_dict[match.home_team].home_form)
    local_dict[match.away_team].away_form=exponential_av(-diff,0.2,local_dict[match.away_team].away_form)
    local_dict[match.home_team].last_game_date=match.DATE
    local_dict[match.away_team].last_game_date=match.DATE
    local_dict[match.home_team].h2h[match.away_team]=exponential_av(diff,0.2,local_dict[match.home_team].h2h[match.away_team])
    local_dict[match.away_team].h2h[match.home_team]=exponential_av(-diff,0.2,local_dict[match.away_team].h2h[match.home_team])
    local_dict[match.home_team].performance_in_prev_game=winner
    local_dict[match.away_team].performance_in_prev_game=1-winner
    
# print(sorted())
print("here2")
df = pd.DataFrame({'home_team_av_points':list1,
    'away_team_av_points':list2,
    'home_team_av_points_conceded':list3,
    'away_team_av_points_conceded':list4,
    'home_current_pos':list5,
    'away_current_pos':list6,
    'home_last_yr_pos':list7,
    'away_last_yr_pos':list8,
    'home_prev_game_perf':list9,
    'away_prev_game_perf':list10,
    'home_team_form':list11,
    'away_team_form':list12,
    'home_team_home_form':list13,
    'away_team_away_form':list14,
    'home_team_rest_time':list15,
    'away_team_rest_time':list16,
    'h2h_form':list17,
    'match_importance':list18,
    'home_win_percentage':list19,
    'away_win_percentage':list20,
    'result':result
})
print("here3")
print(df.head())
#change csv file name
df.to_csv('csv/2011-12.csv')
dict_file=open('dict_file.txt','ab')
for key,values in local_dict.items():
    global_dict[key]=local_dict[key]
dict_file.truncate(0)
pickle.dump(global_dict,dict_file)
        

    


    






