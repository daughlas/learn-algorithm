# coding:utf-8
def select_sort(alist):
    "选择排序"
    n = len(alist)
    for i in range(0, n - 1):
        # 产生了 n - 2次
        min = i
        for j in range(i + 1, n):
            if (alist[j] < alist[min]):
                min = j
        alist[i], alist[min] = alist[min], alist[i]
    return alist


if __name__ == '__main__':
    li = [54, 26, 93, 17, 77, 31, 44, 55,20]
    print(select_sort(li))
