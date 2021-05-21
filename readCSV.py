import csv
from datetime import datetime
import numpy as np

time = []
sent = []
time_stamp = 1615935600
time_window = 3600 # 60 mins
time_window_data = []
gmt_to_ctz = -3600*5
data_correction = -0.1

with open('data/tweet_out.csv', newline='') as f:
    reader = csv.reader(f, delimiter=',')
    next(reader)

    for row in reader:
        if float(row[0]) < time_stamp:
            time_window_data.append(round(float(row[1]), 5))
        else:
            time.append(datetime.utcfromtimestamp(time_stamp + gmt_to_ctz).strftime('%Y-%m-%d %H:%M:%S'))
            sent.append((np.mean(time_window_data)) + data_correction)
            time_window_data = []
            time_stamp += time_window

timeout_file = open('timeData.js', 'a')
timeout_file.write('export const timeData = [\n')
for x in time:
    timeout_file.write(f"'{x}',\n")
timeout_file.write(']')
timeout_file.close

sentout_file = open('sentData.js', 'a')
sentout_file.write('export const sentData = [\n')
for s in sent:
    sentout_file.write(f'{s}, \n')
sentout_file.write(']')
sentout_file.close

print(len(time))
print(len(sent))

# print(time[1:11])
# print(sent[1:11])

