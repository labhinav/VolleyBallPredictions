# from urllib import urlopen
from bs4 import BeautifulSoup
from match import Match
import re
from team import Team
import sys
from operator import attrgetter
import pandas as pd
import pickle

def exponential_av(input,weight,old_val):
    return weight*input+old_val*(1-weight)
# Change file name here.
f=open("../html/results/FlashScore.in_ PlusLiga 2010_2011 Results.html")
text=f.read()
res = re.sub("  ","",text);
res = re.sub("<div class=\"notificationsDialog__sportContainer\">","<RoundEnd>",res);

res = re.sub("<div class=\"event__round event__round--static\">","<MatchEnd><RoundEnd><RoundStart>",res);
res = re.sub("<div class=\"event__time\">","<MatchEnd><MatchStart>",res);
res = re.sub("<div class=\"notificationsDialog \">","<MatchEnd>",res);
R = re.findall("<RoundStart>.*?<RoundEnd>",res);
#print(len(R));
x = 0;
allMatches = []
for i in range(len(R)):
	x = re.findall("<RoundStart>.*?</div>",R[i])
	impStr = re.sub("<.*?>","",x[0])
	# print(impStr)
	mat = re.findall("<MatchStart>.*?<MatchEnd>",R[i])
	mat = [s + "<imp>" + impStr+ "</imp>" for s in mat]
	allMatches.extend(mat);


# print(len(matches));
for i in range(len(allMatches)):
	allMatches[i] = re.sub("<.*?>","  ",allMatches[i])
matches = []
matches = [Match(i) for i in allMatches] 
matches.reverse()
# for i in matches:
#     print(i)
#     print('\n')
# print(len(matches))


# Change File name here
s = open("../html/standings/FlashScore.in_ PlusLiga 2010_2011 Standings.html")
standTable = s.read();
W = re.sub("<svg class=\"teamLogoPlaceholder.*?</svg>","",standTable);
board = re.findall("<div class=\"rowCellParticipantBlock.*?<span class=\"  rowCell____vgDgoa cell___4WLG6Yd \">",W)
for i in range(len(board)):
	board[i] = re.sub("<.*?>","",board[i])

# print(board);

dict_file=open('../../src/dict_file.txt','rb')
global_dict=pickle.load(dict_file)
local_dict={}
for i in range(len(board)):
 if(board[i] in global_dict):
  local_dict[board[i]]=global_dict[board[i]]
 else:
  local_dict[board[i]]=Team(board[i],0)    

    
for i in range(len(board)):
 print(board[i]);
 last_year_pos=int(input("Last year position: "))
 local_dict[board[i]].reset(last_year_pos)
 print("\n");



listdd=[]
listmm=[]
listyy=[]
list_home_team= []
list_away_team=[]
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
 listdd.append(match.day)
 listmm.append(match.month)
 listyy.append(match.year)
 list_home_team.append(match.home_team)
 list_away_team.append(match.away_team)  
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
df = pd.DataFrame({
	'Date':listdd,
    'month':listmm,
    'year':listyy,
    'home_team':list_home_team,
    'away_team':list_away_team,
	'home_team_av_points':list1,
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

#Change name based on season
df.to_csv('../data/2010-11.csv')
dict_file=open('../../src/dict_file.txt','ab')
pickle.dump(local_dict,dict_file)
        

    


    






