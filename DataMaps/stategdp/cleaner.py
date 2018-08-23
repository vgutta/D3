import pandas as pd
"""
data = pd.read_csv("download.csv.xls")

noFips = data.drop(['Fips', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004',
 '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014',
 '2015', '2016'], axis=1)

states = noFips.drop(noFips.index[0])

gdp = states[:-14]

print(gdp)

gdp.to_csv('State_GDP.csv', encoding='utf-8')"""

cleanedData = pd.read_csv("State_GDP.csv")

print(cleanedData.sort_values(by=['GDP']))
