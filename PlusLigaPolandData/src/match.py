from datetime import date
from statistics import mean
class Match:
    def __init__(self,str):
        temp=str.split("  ")
        temp = [i for i in temp if i != '' and i!=' ']
        self.date=temp[0]
        self.home_team=temp[1]
        self.away_team=temp[2]
        # print("Initializing %s %s" %(self.home_team,self.away_team))
        self.home_sets=int(temp[3])
        self.away_sets=int(temp[4])
        self.home_scores=[]
        self.away_scores=[]
        for i in range(self.home_sets+self.away_sets):
            self.home_scores.append(int(temp[5+i*2]))
            self.away_scores.append(int(temp[6+i*2]))
        self.day=int(self.date[0:2])
        self.month=int(self.date[3:5])
        
        #update dates
        self.year=2019
        if(self.month<=5):
            self.year=2020

            
        self.DATE=date(self.year,self.month,self.day)
        t = temp[-1];
        if(t == "9th place"):
            self.importance = 1
        elif(t == "Final"):
            self.importance = 3
        elif(t == "3rd place"):
            self.importance = 2
        elif(t == "4rd place"):
            self.importance = 2
        elif(t == "5th place"):
            self.importance = 1
        elif(t == "Semi-finals"):
            self.importance = 2
        elif(t == "7th place"):
            self.importance = 1
        elif(t == "6th place"):
            self.importance = 1
        elif(t == "8th place"):
            self.importance = 1
        elif(t == "Quarter-finals"):
            self.importance = 1
        else:
            self.importance = 0
        #change dates
        # if(self.DATE>=date(2019,4,24)):
        #     self.importance=3
        # elif(self.DATE>=date(2019,4,7)):
        #     self.importance=2
        # elif(self.DATE>=date(2019,3,23)):
        #     self.importance=1
        self.home_av_points=mean(self.home_scores)
        self.away_av_points=mean(self.away_scores)
        
    def __str__(self):  
        return "date=%s home team=%s away team=%s scores=%d-%d, home:%s, away:%s importance=%d" % (self.date, self.home_team, self.away_team,self.home_sets,self.away_sets,self.home_scores.__str__(),self.away_scores.__str__(),self.importance)  
        