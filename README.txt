Data scraping:-
For first season(2010-11), run scraper.py as follows:
cd src
python3.6 scraper.py
For remaining seasons(2011-12 to 2018-19), first edit file as given in changes.txt, then run scraper2.py as follows
python3.6 scraper2.py
Please enter team names and last year positions of the team when prompted on command line
If the team didn't participate in previous season, pick a random number(preferably close to the worst position of the previous season)

It is necessary to do the data scraping of each season in the order in which they were played.

Training and testing model:-
cd src
python3.6 model_minmax.py
python3.6 model_standard.py


It is not necessary to use python3.6, you can execute using any python version which has the necessary requirements installed
