# coding:utf-8
def bubble_sort(alist):
    "冒泡排序"
    n = len(alist)
    for i in range(0, n - 1):
        # 产生了 n - 1 次
        count = 0
        for j in range(n - 1 - i):
            if (alist[j] > alist[j + 1]):
                alist[j], alist[j + 1] = alist[j + 1], alist[j]
                count += 1
        if count == 0:
            break
    return alist


if __name__ == '__main__':
    li = [9, 8, 7, 6]
    print(bubble_sort(li))
