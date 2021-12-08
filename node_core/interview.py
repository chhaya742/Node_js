# def birthdaycakecandkes(n):
#     tallest=n[0]
#     for i in n:
#         if tallest<i:
#             tallest=i
#     count=0
#     for i in n:
#         if tallest==i:
#             count+=1
#     print()
#     return "the maxumum height candles are ",tallest,"units high.There are ", count,"of them"
# use=int(input("enter number of candles"))
# list1=[]
# for i in range (0,use):
#     list1.append(use1=int(input()))
# print(birthdaycakecandkes(list1))


# SECOND 

# n=int(input("enter size"))
# k=int(input("enter digit"))
# list1=[]
# for  i in range(0,n):
#     user=int(input(""))
#     list1.append(user)
# i=0
# count=0
# while i<len(list1):
#     j=i+1
#     while j<len(list1):
#         sum=list1[i]+list1[j]
#         if sum%k!=0:
#             count+=1
#         j+=1
#     i+=1
# print() 
# print("not division by three pairs",count)


# def birthdayCakeCandles(ar_count,ar):
#     max = ar[0]
#     count = 0
#     for i in range(0,ar_count):
#         if ar[i] > max:
#             max  = ar[i]
#     for i in range(0,ar_count):
#         if ar[i] == max:
#             count+=1
#     return count
# print(birthdayCakeCandles(5,[1,2,3,5,5]))




# def solveSubset(S, k):
#     r =list([0]*k)
#     for i in S:
#         r[i%k] += 1
#     count= 0
#     for a in range(1, (k+1)//2):
#         count+= max(r[a], r[k-a])
#     if k % 2 == 0 and r[k//2]:
#         count += 1
#     if r[0]:
#         count+= 1
#     return count
# k=int(input("value of k:-"))
# n=int(input("enter size of list:-"))
# S=[]
# for i in range(0,n):
#     S.append(int(input()))
# print()
# print(solveSubset(S, k))

# def solveSubset(S,k):
#     count=0
#     list1=[]
#     m=0
#     j=0
#     while j<len(S):
#         for i in range(0,len(S)):
#             sum=S[m]+i
#             if sum%k!=0:
#                 if S[m] not in list1:
#                     list1.append(S[m])
#                     count+=1  
#         m+=1
#         j+=1
#     print(count)
#     return list1
# k=int(input("value of k:-"))
# n=int(input("enter size of list:-"))
# S=[]
# for i in range(0,n):
#     user=int(input())
#     S.append(user)
# print()
# print(solveSubset(S, k))
    

# def solveSubset(S,k):
#     list1=[]
#     m=0
#     i=0
#     count=0
#     while i<len(S):
#         j=m+1
#         while j<len(S):
#             sum=S[m]+S[j]
#             print(sum)
#             if sum%k!=0:
#                 count+=1
#                 if S[m] not in list1:
#                     list1.append(S[m])
#             j+=1 
#         m+=1
#         i+=1 
#     print()
#     return list1
# k=int(input("value of k:-"))
# n=int(input("enter size of list:-"))
# S=[]
# for i in range(0,n):
#     user=int(input())
#     S.append(user)
# print()
# print(solveSubset(S, k)) 



# def fun(l,k, m=0,count=0):
#     list1=[]
#     for i in range(0,len(l)):
#         j=i+1
#         while j<len(l):
#             if (l[m]+l[j])%k!=0:
#                 if l[m] not in list1:
#                     list1.append(l[m])
#             j+=1
#             m+=1
# k=int(input("value of divisibity"))    
# a=int(input("Entee the size :  "))
# b=[]
# for i in range(a):
#      b.append(int(input("Enter the value")))
# print(fun(b,k))
# s=[1,7,2,4]
# k=3
# a=[0]*k
# c1=0
# c2=0
# c3=0
# c4=0
# for i in s:
#     c=i%k
#     if c==0:
#         c1+=1
#         a[c]=c1
#     elif c==1:
#         c2+=1
#         a[c]=c2
#     elif c==2:
#         c3+=1
#         a[c]=c3
#     elif c==3:
#         c4+=1
#         a[c]=c4
# print(max(a))
    
        
# d=[]
# def fun(b,k, c=0,a=[0]*k):
#     for j in b:
#         p=j%k
#         if a[0]==p:
#             c+=1
#     print(c)
# k=int(input("value of divisibity"))    
# a=int(input("Entee the Num :  "))
# b=[]
# for i in range(a):
#      b.append(int(input("Enter the value")))
# fun(b,k)

# def solveSubset(S, k,m=0):
#     frequncy=[0]*k
#     list1=[]
#     for i in S:
#         frequncy[i%k]+=1
#         j=i+1
#         while j<len(S):
#             if (S[j]+S[m])%k!=0:
#                 if S[j] not in list1:
#                     list1.append(S[j])
#                     print(list1)
#             j+=1
#         m+=1
#     # print(list1)
#     return (max(frequncy))
# k=int(input("value of k:-"))
# n=int(input("enter size of list:-"))
# S=[]
# for i in range(0,n):
#     S.append(int(input()))
# print()
# print(solveSubset(S,k)) 

a=[1,2,3]
b=[3,2,1]
# list1=[]
# ali=0
# bob=0
# for i in range(0,len(a)):
#     if a[i]>b[i]:
#         ali+=1
#     elif a[i]==b[i]:
#         print()
#     else:
#         bob+=1
# print(ali,bob) 

# a=[[1,2,3],[4,5],[6]]
# for i in a:
#     for j in i :
#         print(j)




