# coding:utf-8
# def binary_search(alist, item):
#     "二分查找，递归版本"
#     n = len(alist)
#     if n > 0:
#         mid = n // 2
#         if alist[mid] == item:
#             return True
#         elif alist[mid] < item:
#             return binary_search(alist[mid+1:], item)
#         else:
#             return binary_search(alist[:mid], item)
#     return False


def binary_search_2(alist, item):
    "二分查找，非递归版本"
    n = len(alist)
    first = 0
    end = n - 1
    while end >= first:
        mid = (first + end) // 2
        if alist[mid] == item:
            return True
        elif alist[mid] < item:
            # 右边查找
            first = mid + 1
        else:
            # 左边查找
            end = mid - 1
    return False


if __name__ == '__main__':
    li = [17, 20, 26, 31, 44, 54, 55, 77, 93]
    print(binary_search_2(li, 92))
