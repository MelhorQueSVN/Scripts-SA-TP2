# Imports
from sklearn.metrics import mean_squared_error, median_absolute_error
from tensorflow.keras.callbacks import ModelCheckpoint
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import MinMaxScaler
from tensorflow.keras.models import load_model
from pandas.plotting import scatter_matrix
from tensorflow.keras.layers import Layer
from tensorflow.keras import Model
import plotly.graph_objects as go
import matplotlib.pyplot as plt
from matplotlib import pyplot
import plotly.express as px
import tensorflow as tf
import seaborn as sns
import pandas as pd
import numpy as np
import logging
import math
import os
from sklearn.preprocessing import LabelEncoder
import tensorflowjs as tfjs


print('TF version: ', tf.__version__)
print(tf.executing_eagerly())
logging.getLogger('tensorflow').setLevel(logging.ERROR)
tf.random.set_seed(666)
tf.keras.backend.clear_session()


# carregar o dataset
dataset = pd.read_csv("Braga.csv")

# Analisar o conjunto de dados
dataset.head

# Labels = ['date', 'maxtempC', 'mintempC', 'avgtempC', 'uvIndex', 'humidity', 'pressure', 'FeelsLikeC', 'month', 'city']
labels = dataset.columns

# não há dados nulos, pelo que não é necessário tratamento

dataset = dataset.set_index(['date'])

dataset = dataset.drop(labels=['month', 'city'], axis=1)

# normalizar os dados aqui


# convert series to supervised learning
def series_to_supervised(data, n_in=1, n_out=1, dropnan=True):
    n_vars = 1 if type(data) is list else data.shape[1]
    df = pd.DataFrame(data)
    cols, names = list(), list()
    # input sequence (t-n, ... t-1)
    for i in range(n_in, 0, -1):
        cols.append(df.shift(i))
        names += [('var%d(t-%d)' % (j+1, i)) for j in range(n_vars)]
    # forecast sequence (t, t+1, ... t+n)
    for i in range(0, n_out):
        cols.append(df.shift(-i))
        if i == 0:
            names += [('var%d(t)' % (j+1)) for j in range(n_vars)]
        else:
            names += [('var%d(t+%d)' % (j+1, i)) for j in range(n_vars)]
    # put it all together
    agg = pd.concat(cols, axis=1)
    agg.columns = names
    # drop rows with NaN values
    if dropnan:
        agg.dropna(inplace=True)
    return agg


values = dataset.values
values = values.astype('float32')
# normalize features
scaler = MinMaxScaler(feature_range=(0, 1))
scaled = scaler.fit_transform(values[:, [0, 1, 2, 4, 5, 6]])

col = np.array(values[:, 3])
col.shape = (values.shape[0], 1)

scaled = np.hstack((scaled[:, :3], col, scaled[:, 3:]))

print(scaled[:, 3])

# frame as supervised learning
reframed = series_to_supervised(scaled, 7, 1)
reframed.drop(reframed.columns[[49, 50, 51, 53, 54, 55]], axis=1, inplace=True)


values = reframed.values


train, test = train_test_split(values, test_size=0.2, shuffle=True)

# split into input and outputs
train_X, train_y = train[:, :49], train[:, 49]
test_X, test_y = test[:, :49], test[:, 49]


# reshape input to be 3D [samples, timesteps, features]
train_X = train_X.reshape((train_X.shape[0], 1, train_X.shape[1]))
test_X = test_X.reshape((test_X.shape[0], 1, test_X.shape[1]))
print(train_X.shape, train_y.shape, test_X.shape, test_y.shape)


model = tf.keras.models.Sequential()
model.add(tf.keras.layers.LSTM(
    50, input_shape=(train_X.shape[1], train_X.shape[2])))
model.add(tf.keras.layers.Dense(1))
model.compile(loss='mae', optimizer='adam')
# fit network
history = model.fit(train_X, train_y, epochs=100, batch_size=72,
                    validation_data=(test_X, test_y), verbose=2, shuffle=False)
# plot history
pyplot.plot(history.history['loss'], label='train')
pyplot.plot(history.history['val_loss'], label='test')
pyplot.legend()
# pyplot.show()

# Guardar o modelo
# model.save('my_model.h5')
tfjs.converters.save_keras_model(model, "keras_model")

ex = np.array([[0.55, 0.5666667,  0.5, 0.5714286,  0.45454547, 0.5090904, 0.48387092, 0.625,      0.53333336, 0.5625,     0.5714286,  0.49350646, 0.5636368,  0.516129,   0.625,      0.6,        0.59375,    0.5714286, 0.51948047, 0.5818176,  0.58064514, 0.55,    0.6333333,  0.5625, 0.42857146, 0.5974026,  0.5636368,  0.516129,   0.45000002, 0.6, 0.5,        0.42857146, 0.7792208,  0.5272732,  0.4516129,  0.52500004, 0.6,        0.53125,    0.5714286,  0.66233766, 0.545454,   0.48387092, 0.52500004, 0.5666667,  0.53125,    0.5714286,  0.6233766,
                0.5818176, 0.48387092], [0.625,  0.6333333,  0.59375, 5.0,  0.51948047, 0.6727276, 0.5483871,  0.625, 0.6666667,  0.625,    5.0,     0.64935064, 0.7090912,  0.58064514, 0.6, 0.6333333, 0.59375,  5.0, 0.6233766,  0.7090912, 0.58064514, 0.575,    0.6333333, 0.5625, 5.0,         0.6233766, 0.72727203, 0.516129,  0.7,   0.6333333, 0.625,      6.0,         0.50649345, 0.7454548, 0.6129032, 0.75, 0.7666667,  0.71875,    6.0,    0.42857143, 0.7454548, 0.7096774, 0.7,        0.73333335, 0.6875,    6.0,       0.5324675, 0.7090912, 0.7096774]])

print(ex.shape)
ex = ex.reshape((ex.shape[0], 1, ex.shape[1]))

print(test_X[30])

yhat = model.predict(ex)


print(yhat)
