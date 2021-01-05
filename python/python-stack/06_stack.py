class Stack(object):
    "栈"
    def __init__(self):
        self.__list = []

    def push(self, item):
        "压栈，添加 item 到栈顶"
        self.__list.append(item)

    def pop(self):
        "出栈，从栈顶弹出一个元素"
        if self.is_empty():
            return None
        return self.__list.pop()

    def peek(self):
        "返回栈顶元素"
        if self.__list:
            return self.__list[-1]
        else:
            return None

    def is_empty(self):
        "判断栈是否为空"
        return self.__list == []

    def size(self):
        "返回栈中元素的个数"
        return len(self.__list)


if __name__ == "__main__":
    s = Stack()
    s.push(1)
    s.push(2)
    s.push(3)
    s.push(4)
    print(s.pop())
    print(s.pop())
    print(s.pop())
    print(s.pop())
    print(s.pop())
    print(s.peek())
