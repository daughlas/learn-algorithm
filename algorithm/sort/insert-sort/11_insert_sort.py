# coding:utf-8


def insert_sort(alist):
    n = len(alist)
    for j in range(n - 1):
        # for i in range(j + 1, 0, -1):
        #     if (alist[i] < alist[i - 1]):
        #         alist[i - 1], alist[i] = alist[i], alist[i - 1]
        #     else:
        #         break

        i = j + 1
        while i > 0:
            if (alist[i] < alist[i - 1]):
                alist[i - 1], alist[i] = alist[i], alist[i - 1]
                i -=1
            else:
                break
    return alist


if __name__ == '__main__':
    li = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print(insert_sort(li))
    print(li)
    li2 = [9, 8, 7, 6, 5]
    print(insert_sort(li2))
    li3 = [2, 1]
    print(insert_sort(li3))
    li4 = [1]
    print(insert_sort(li4))
    li5 = []
    print(insert_sort(li5))
    li6 = [5, 6, 7, 8, 9]
    print(insert_sort(li6))
