import streamlit as st
import dataclasses
import random
import json

st.beta_container()
st.beta_columns(3)
col1, col2, col3 = st.beta_columns((8,3,1))

@dataclasses.dataclass 
class GameState:
    score:int
    game_number: int = 0
    game_over: bool = False
@st.cache(allow_output_mutation=True)
def persistent_game_state() -> GameState:
    return GameState(0)
state = persistent_game_state()
if st.button("new game"):
    state.score=0
    state.game_number += 1
    state.game_over = False


select=st.sidebar.selectbox('Artist',('Justin Bieber','Adele','Drake','The Weeknd','Ariana Grande','Ed Sheeran','Coldplay','Miley Cyrus','Backstreet Boys','Eminem','21 Savage','Linkin Park','21 Pilots','Kanye West','Taylor Swift'))

with open('lyrics.json','rb') as f:
   data=json.load(f)

if select=='Justin Bieber':
   x=0;y=8
elif select=='Adele':
   x=9;y=15
elif select=='Drake':
   x=16;y=21
elif select=='The Weeknd':
   x=22;y=27
elif select=='Taylor Swift':
   x=28;y=33
elif select=='Ariana Grande':
   x=34;y=36
elif select=='Ed Sheeran':
   x=37;y=43
elif select=='Coldplay':
   x=44;y=50
elif select=='Miley Cyrus':
   x=51;y=57
elif select=='Backstreet Boys':
   x=58;y=64
elif select=='Eminem':
   x=65;y=71
elif select=='Kanye West':
   x=72;y=78
elif select=='21 Savage':
   x=79;y=81
elif select=='Linkin Park':
   x=82;y=88
else:x=89;y=95



a=random.randint(x,y)
b=random.randint(2,3)
c=random.randint(1,len(data[a][b])-1)


col1.header("Lyrics:")
col1.text(data[a][b][c])

col1.subheader('by: '+data[a][0])
col2.header("Your choice:")

ground=True if b==2 else False

if col2.button('Real'):
  if ground==True:state.score+=1
  else:state.score-=1
if col2.button('Fake'):
  if ground==False:state.score+=1
  else:state.score-=1

col3.header("Score")

if state.score<0:
  state.score=0
col3.write(state.score)

