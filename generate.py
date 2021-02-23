from fastai.text.all import *
import torch
from transformers import GPT2TokenizerFast, GPT2LMHeadModel
import pandas as pd
import sys

pretrained_weights = 'gpt2'
tokenizer = GPT2TokenizerFast.from_pretrained(pretrained_weights)


def tokenize(text):
    toks = tokenizer.tokenize(text)
    return tensor(tokenizer.convert_tokens_to_ids(toks))



class TransformersTokenizer(Transform):
    def __init__(self, tokenizer): self.tokenizer = tokenizer
    def encodes(self, x): 
        return x if isinstance(x, Tensor) else tokenize(x)
        
    def decodes(self, x): return TitledStr(self.tokenizer.decode(x.cpu().numpy()))

class DropOutput(Callback):
    def after_pred(self):self.learn.pred=self.pred[0]

artists=['kanye','beiber','ariana','drake','miley','21pilots','adele','21savage','backstreet','coldplay','edsheeran','eminem','linkinpark','weeknd','taylor']

def generate(prompt,model)
  learn=load_learner('models/{}.pkl'.format(model))
  prompt_ids = tokenizer.encode(prompt)
  inp = tensor(prompt_ids)[None]#.cuda()
  preds=learn.model.generate(inp,
                             do_sample=True, 
                             max_length=90, 
                             min_length=5,
                             top_k=40,
                             num_return_sequences=1)
   return tokenizer.decode(preds[0].cpu().tolist())
