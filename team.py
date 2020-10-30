from datetime import date
class Team:
    def __init__(self,name,last_year_position):
        self.name=name
        self.average_points_per_set=20
        self.average_points_against_per_set=20
        self.last_year_position=last_year_position
        self.current_position=last_year_position
        self.performance_in_prev_game=0
        self.form=0
        self.home_form=0
        self.away_form=0
        self.last_game_date=date(2010,1,1)
        self.no_of_games_this_season=0
        self.no_of_wins_this_season=0
        self.percentage_of_wins_this_season=50
        self.h2h={}

