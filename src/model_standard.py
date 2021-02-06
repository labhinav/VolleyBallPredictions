#!/usr/bin/env python
# coding: utf-8

# In[4]:


import numpy as np
import pandas as pd 
import matplotlib.pyplot as plt
# import seaborn as sns
from scipy import stats
from sklearn.model_selection import train_test_split
from sklearn.model_selection import cross_validate
from sklearn.metrics import roc_auc_score, accuracy_score, precision_score, recall_score, f1_score
from sklearn.linear_model import LogisticRegression
from sklearn.tree import DecisionTreeClassifier
from sklearn.svm import SVC,NuSVC,LinearSVC
from sklearn.neighbors import KNeighborsClassifier
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.discriminant_analysis import LinearDiscriminantAnalysis, QuadraticDiscriminantAnalysis
from sklearn import preprocessing
from sklearn.pipeline import make_pipeline
from sklearn.model_selection import ShuffleSplit
from sklearn.model_selection import cross_val_score
print("imported the needed libraries")


#get_ipython().run_line_magic('matplotlib', 'inline')


# In[5]:


df = pd.read_csv("../data/total_data.csv")
df = df.drop(df.columns[0], axis=1)


df = df.drop(["away_team_rest_time"], axis=1)
# Due to high correlation with 'away_team_rest_time'


# In[13]:


y = df["result"]
X = df.drop(["result"], axis=1)

X_train,X_test,y_train,y_test = train_test_split(X, y, test_size=0.2, random_state = 121)


# In[14]:


scaler = preprocessing.StandardScaler()
scaler.fit(X_train)
scaled_X_train = scaler.transform(X_train)
scaled_X_test = scaler.transform(X_test)


scaled_X_train = pd.DataFrame(data=scaled_X_train, columns=X_train.columns)
scaled_X_test = pd.DataFrame(data=scaled_X_test, columns=X_test.columns)

# scaled_X_train

# maked a pipeline for scaling while corss_validation


# In[15]:


# from sklearn.decomposition import PCA
# pca = PCA(0.95)
# X=pca.fit_transform(X)


# In[16]:


cv = ShuffleSplit(n_splits=15, test_size=0.1, random_state=0)


# In[17]:


#Logistic Regression
# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf = make_pipeline(preprocessing.StandardScaler(), LogisticRegression(solver='liblinear',max_iter=1000))
# clf2 = make_pipeline(preprocessing.MinMaxScaler(), LogisticRegression(solver='liblinear',max_iter=1000))

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)

LR = LogisticRegression()

LR.fit(scaled_X_train,y_train)
y_pred = LR.predict(scaled_X_test)
y_train_pred = LR.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

LR_test_accuracy = accuracy_score(y_test, y_pred)
LR_train_accuracy = accuracy_score(y_train,y_train_pred)
LR_test_f1 = f1_score(y_test,y_pred)
LR_train_f1 = f1_score(y_train,y_train_pred)
LR_test_roc = roc_auc_score(y_test,y_pred)
LR_train_roc = roc_auc_score(y_train,y_train_pred)
LR_test_accuracy


# In[18]:


#DecisionTree

# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf = make_pipeline(preprocessing.StandardScaler(), DecisionTreeClassifier())
# clf2 = make_pipeline(preprocessing.MinMaxScaler(), DecisionTreeClassifier())

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)


dtree = DecisionTreeClassifier()

dtree.fit(scaled_X_train,y_train)
y_pred = dtree.predict(scaled_X_test)
y_train_pred = dtree.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

dtree_test_accuracy = accuracy_score(y_test, y_pred)
dtree_train_accuracy = accuracy_score(y_train,y_train_pred)
dtree_test_f1 = f1_score(y_test,y_pred)
dtree_train_f1 = f1_score(y_train,y_train_pred)
dtree_test_roc = roc_auc_score(y_test,y_pred)
dtree_train_roc = roc_auc_score(y_train,y_train_pred)
dtree_test_accuracy


# In[19]:


#SVM

# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf2 = make_pipeline(preprocessing.StandardScaler(), SVC(probability = True))
# clf = make_pipeline(preprocessing.MinMaxScaler(), SVC(probability = True))

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)

SVM = SVC(probability = True)

SVM.fit(scaled_X_train,y_train)
y_pred = SVM.predict(scaled_X_test)
y_train_pred = SVM.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

SVM_test_accuracy = accuracy_score(y_test, y_pred)
SVM_train_accuracy = accuracy_score(y_train,y_train_pred)
SVM_test_f1 = f1_score(y_test,y_pred)
SVM_train_f1 = f1_score(y_train,y_train_pred)
SVM_test_roc = roc_auc_score(y_test,y_pred)
SVM_train_roc = roc_auc_score(y_train,y_train_pred)
SVM_test_accuracy


# In[20]:


#Random Forest

# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf2 = make_pipeline(preprocessing.StandardScaler(), RandomForestClassifier())
# clf = make_pipeline(preprocessing.MinMaxScaler(), RandomForestClassifier())

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)



RForest = RandomForestClassifier()

RForest.fit(scaled_X_train,y_train)
y_pred = RForest.predict(scaled_X_test)
y_train_pred = RForest.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

RForest_test_accuracy = accuracy_score(y_test, y_pred)
RForest_train_accuracy = accuracy_score(y_train,y_train_pred)
RForest_test_f1 = f1_score(y_test,y_pred)
RForest_train_f1 = f1_score(y_train,y_train_pred)
RForest_test_roc = roc_auc_score(y_test,y_pred)
RForest_train_roc = roc_auc_score(y_train,y_train_pred)
RForest_test_accuracy


# In[21]:


#KNN

# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf = make_pipeline(preprocessing.StandardScaler(), KNeighborsClassifier())
# clf2 = make_pipeline(preprocessing.MinMaxScaler(), KNeighborsClassifier())

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)

KNN = KNeighborsClassifier()

KNN.fit(scaled_X_train,y_train)
y_pred = KNN.predict(scaled_X_test)
y_train_pred = KNN.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

KNN_test_accuracy = accuracy_score(y_test, y_pred)
KNN_train_accuracy = accuracy_score(y_train,y_train_pred)
KNN_test_f1 = f1_score(y_test,y_pred)
KNN_train_f1 = f1_score(y_train,y_train_pred)
KNN_test_roc = roc_auc_score(y_test,y_pred)
KNN_train_roc = roc_auc_score(y_train,y_train_pred)
KNN_test_accuracy


# In[22]:


#Naive Bayes

# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf = make_pipeline(preprocessing.StandardScaler(), GaussianNB())
# clf2 = make_pipeline(preprocessing.MinMaxScaler(), GaussianNB())

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)


bayes = GaussianNB()

bayes.fit(scaled_X_train,y_train)
y_pred = bayes.predict(scaled_X_test)
y_train_pred = bayes.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

bayes_test_accuracy = accuracy_score(y_test, y_pred)
bayes_train_accuracy = accuracy_score(y_train,y_train_pred)
bayes_test_f1 = f1_score(y_test,y_pred)
bayes_train_f1 = f1_score(y_train,y_train_pred)
bayes_test_roc = roc_auc_score(y_test,y_pred)
bayes_train_roc = roc_auc_score(y_train,y_train_pred)
bayes_test_accuracy


# In[23]:


#LDA

# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf = make_pipeline(preprocessing.StandardScaler(), LinearDiscriminantAnalysis(solver='lsqr'))
# clf2 = make_pipeline(preprocessing.MinMaxScaler(), LinearDiscriminantAnalysis(solver='lsqr'))

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)

LDA = LinearDiscriminantAnalysis(solver='lsqr')

LDA.fit(scaled_X_train,y_train)
y_pred = LDA.predict(scaled_X_test)
y_train_pred = LDA.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

LDA_test_accuracy = accuracy_score(y_test, y_pred)
LDA_train_accuracy = accuracy_score(y_train,y_train_pred)
LDA_test_f1 = f1_score(y_test,y_pred)
LDA_train_f1 = f1_score(y_train,y_train_pred)
LDA_test_roc = roc_auc_score(y_test,y_pred)
LDA_train_roc = roc_auc_score(y_train,y_train_pred)
LDA_test_accuracy


# In[24]:


#QDA

# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf = make_pipeline(preprocessing.StandardScaler(), QuadraticDiscriminantAnalysis())
# clf2 = make_pipeline(preprocessing.MinMaxScaler(), QuadraticDiscriminantAnalysis())

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)


QDA = QuadraticDiscriminantAnalysis()

QDA.fit(scaled_X_train,y_train)
y_pred = QDA.predict(scaled_X_test)
y_train_pred = QDA.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

QDA_test_accuracy = accuracy_score(y_test, y_pred)
QDA_train_accuracy = accuracy_score(y_train,y_train_pred)
QDA_test_f1 = f1_score(y_test,y_pred)
QDA_train_f1 = f1_score(y_train,y_train_pred)
QDA_test_roc = roc_auc_score(y_test,y_pred)
QDA_train_roc = roc_auc_score(y_train,y_train_pred)
QDA_test_accuracy


# In[25]:


#MLP
from sklearn.neural_network import MLPClassifier

# scoring = ['accuracy', 'precision_macro', 'recall_macro' , 'f1_weighted', 'roc_auc']
# clf = make_pipeline(preprocessing.StandardScaler(), MLPClassifier(solver='adam', alpha=3e-4, hidden_layer_sizes=(10), random_state=1,max_iter=1000))
# clf2 = make_pipeline(preprocessing.MinMaxScaler(), MLPClassifier(solver='adam', alpha=3e-4, hidden_layer_sizes=(10), random_state=1,max_iter=1000))

# scores = cross_validate(clf, X, y, scoring=scoring, cv=cv, return_train_score = True)
# scores2 = cross_validate(clf2, X, y, scoring=scoring, cv=cv, return_train_score = True)

MLP = MLPClassifier(solver='adam',learning_rate = 'adaptive',hidden_layer_sizes=(12), random_state=202,max_iter=2000,activation = 'relu')

MLP.fit(scaled_X_train,y_train)
y_pred = MLP.predict(scaled_X_test)
y_train_pred = MLP.predict(scaled_X_train)
# accuracy_score(y_test,y_pred)

MLP_test_accuracy = accuracy_score(y_test, y_pred)
MLP_train_accuracy = accuracy_score(y_train,y_train_pred)
MLP_test_f1 = f1_score(y_test,y_pred)
MLP_train_f1 = f1_score(y_train,y_train_pred)
MLP_test_roc = roc_auc_score(y_test,y_pred)
MLP_train_roc = roc_auc_score(y_train,y_train_pred)
MLP_test_accuracy


# In[26]:


models_initial = pd.DataFrame({
    'Model'         : ['Logistic Regression', 'Decision Tree', 'Support Vector Machine', 'Random Forest', 'K-Nearest Neighbors', 'Naive Bayes', 'LinearDiscriminantAnalysis', 'QuadraticDiscriminantAnalysis','Neural Network'],
    'test_Acc'       : [LR_test_accuracy, dtree_test_accuracy, SVM_test_accuracy, RForest_test_accuracy, KNN_test_accuracy, bayes_test_accuracy, LDA_test_accuracy, QDA_test_accuracy,MLP_test_accuracy],
    'train_Accuracy'       : [LR_train_accuracy, dtree_train_accuracy, SVM_train_accuracy, RForest_train_accuracy, KNN_train_accuracy, bayes_train_accuracy, LDA_train_accuracy, QDA_train_accuracy,MLP_train_accuracy],
    'test_AUC_ROC'   : [LR_test_roc, dtree_test_roc, SVM_test_roc, RForest_test_roc, KNN_test_roc, bayes_test_roc, LDA_test_roc, QDA_test_roc,MLP_test_roc],
    'train_AUC_ROC'        : [LR_train_roc, dtree_train_roc, SVM_train_roc, RForest_train_roc, KNN_train_roc, bayes_train_roc, LDA_train_roc, QDA_train_roc,MLP_train_roc],
    'train_F1_Score'       : [LR_train_f1, dtree_train_f1, SVM_train_f1, RForest_train_f1, KNN_train_f1, bayes_train_f1, LDA_train_f1, QDA_train_f1,MLP_train_f1],
    'test_F1_Score'  : [LR_test_f1, dtree_test_f1, SVM_test_f1, RForest_test_f1, KNN_test_f1, bayes_test_f1, LDA_test_f1, QDA_test_f1,MLP_test_f1]
    
    }, columns = ['Model', 'test_Acc', 'train_Accuracy', 'test_AUC_ROC', 'train_AUC_ROC','test_F1_Score', 'train_F1_Score'])
print("StandardScaler preprocessing")
models_sorted=models_initial.sort_values(by='test_Acc', ascending=False)
pd.set_option("display.max_rows",None, "display.max_columns", None)
print(models_sorted)
