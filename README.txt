Data scraping:-
For first season(2010-11), run scraper.py as follows:
cd src
python3 scraper.py

For remaining seasons(2011-12 to 2018-19), first edit file as given in changes.txt, then run scraper2.py as follows
python3 scraper2.py (scraper2 will cause an error unless scraper.py has been executed for the first season)

Please enter team names and last year positions of the team when prompted on command line (for first season, you can copy paste values from input_files/input1.txt)
If the team didn't participate in previous season, pick a random number(preferably close to the worst position of the previous season)

It is necessary to do the data scraping of each season in the order in which they were played.

Training and testing model:-

cd src
python3 model_minmax.py
python3 model_standard.py


