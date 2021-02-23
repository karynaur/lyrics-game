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


with open('lyrics.json','rb') as f:
   data=json.load(f)

a=random.randint(1,96)
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

