import pandas as pd
import numpy as np
import sys

artists=['kanye','beiber','ariana','drake','miley','21pilots','adele','21savage','backstreet','coldplay','edsheeran','eminem','linkinpark','weeknd']

for i in artists:
  print(i)
  path='data/{}'.format(i)
  with open(path+'/{}.csv'.format(i),encoding="utf8", errors='ignore') as f:
    train=pd.read_csv(f,header=None)
  train = pd.DataFrame(train[0].str.split('\n').tolist()).stack()
  
  shuffle=train.reindex(np.random.permutation(train.index))
  print('train shape={}'.format(train.shape))
  print('valid shape={}'.format(shuffle.shape))
  train.to_csv(path+'/train.csv',index=False)
  shuffle.to_csv(path+'/valid.csv',index=False)

