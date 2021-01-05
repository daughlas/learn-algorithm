# coding:utf-8
def shell_sort(alist):
    pass
    n = len(alist)
    gap = n // 2
    while gap >= 1:
        # 希尔排序与普通的插入算法的区别就是步长
        for j in range(gap, n):
            i = j
            while i > 0:
                if alist[i] < alist[i - gap]:
                    alist[i], alist[i - gap] = alist[i - gap], alist[i]
                    i -= gap
                else:
                    break
        # 缩短 gap 步长
        gap //= 2
    return alist


if __name__ == '__main__':
    li = [54, 26, 93, 17, 77, 31, 44, 55, 20]
    print(shell_sort(li))
    print(li)
    li2 = [9, 8, 7, 6, 5]
    print(shell_sort(li2))
    li3 = [2, 1]
    print(shell_sort(li3))
    li4 = [1]
    print(shell_sort(li4))
    li5 = []
    print(shell_sort(li5))
    li6 = [5, 6, 7, 8, 9]
    print(shell_sort(li6))
