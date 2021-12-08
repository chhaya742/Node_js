# a=[10, 20, 20, 10, 10, 30, 50, 10, 20]
# b=[]
# c=0
# for i in range(0,len(a)):
#     if a[i] not in b:
#         b.append(a[i])
# for j in range(0,len(b)):
#     n=0
#     count=0
#     while n<len(a):
#         if b[j]==a[n]:
#             count+=1            
#         n+=1
#     v=count//2
#     c+=v
# return c
# a=[[6, 6, 7, -10, 9, -3, 8, 9, -1],
# [9, 7, -10, 6, 4, 1, 6, 1, 1],
# [-1 ,-2, 4, -6, 1, -4, -6, 3, 9],
# [-8, 7, 6, -1 ,-6 , -6 ,6 ,-7, 2],
# [-10 ,-4 ,9, 1, -7, 8, -5, 3, -5],
# [-8 ,-3, -4, 2, -3, 7, -5, 1, -5,],
# [-2, -7, -4, 8, 3 ,-1 ,8 ,2 ,3],
# [-3, 4 ,6 ,-7 ,-7 ,-8 ,-3 ,9 ,-6],
# [-2 ,0 ,5 ,4 ,4 ,4 ,-3, 3 ,0]]
# l=0
# r=0
# for i in range (0,len(a)):
#     l+=a[i][i] 
# j=-1
# for i in range (0,len(a)):
#     r+=a[i][j]
#     j-=1
# if r<l:
#     print(l-r)
# else:
#     print(r-l)

# ar=[-4, 3, -9, 0, 4, 1]
# p=0
# n=0
# z=0
# for i in ar:
#     if i>0:
#         p+=1
#     elif i<0:
#         n+=1
#     else:
#         z+=1
# print(p/len(ar))
# print(n/len(ar))
# print(z/len(ar))
# n=6
# for i in range(n):
#     for j in range(n):
#         if i==(n-1) or j==(n-1) or i+j==(n-1) or i+j==n+2 :
#             print("#",end=' ')
#         else:
#             print("",end='  ')
#     print()



# a=int(input("enter limit;"))
# for i in range(a):
#     print(" "*(a-i-1),end="")
#     for j in range(0,i+1):
#         print("*",end="")
#     print()

# arr=[7, 69, 2 ,221, 8974]
# m=max(arr)
# m1=min(arr)
# maxsum=0
# minisum=0
# for i in arr:
#     if i==m:
#         continue
#     minisum+=i
# for i in arr:
#     if i==m1:
#         continue
#     maxsum+=i 
# print(minisum,maxsum)

# arr= 
# arr.sort()
# hold = [None]*int(len(arr)-3)
# for i in range(0,len(arr)-3):
#     temp = 0
#     for j in range(i,i+4):
#         temp = temp + arr[j]
#     hold[i] = temp
    
# print(hold[0],hold[-1])


# s='12:01:00AM'
# for i in range(0,25):
    
