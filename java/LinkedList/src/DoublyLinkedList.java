public class DoublyLinkedList<E> implements LinkedList<E> {
    private class Node {
        public E e;
        public Node next, prev;

        public Node(E e, Node next, Node prev) {
            this.e = e;
            this.next = next;
            this.prev = prev;
        }

        public Node(E e) {
            this(e, null, null);
        }

        public Node() {
            this(null, null, null);
        }

        @Override
        public String toString() {
            return "Node{" +
                    "e=" + e +
                    ", prev=" + (prev == null ? null : prev.e) +
                    ", next=" + (next == null ? null : next.e) +
                    '}';
        }
    }

    private int size;
    private Node head;

    public DoublyLinkedList() {
        head = new Node();
        size = 0;
    }

    @Override
    public int getSize() {
        return size;
    }

    @Override
    public boolean isEmpty() {
        return size == 0;
    }

    @Override
    public void add(int index, E e) {
        if (index < 0 || index > size) {
            throw new IllegalArgumentException("Add failed. Illegal index.");
        }
        if (size == 0) {
            head = new Node(e, null, null);
            size++;
            return;
        }
        if (index == 0) {
            Node newNode = new Node(e, head, null);
            if (newNode.next != null) {
                newNode.next.prev = newNode;
            }
            head = newNode;
        } else {
            Node prev = head;
            for (int i = 1; i < index; i++) {
                prev = prev.next;
            }
            Node newNode = new Node(e, prev.next, prev);
            if (newNode.next !=null) {
                newNode.next.prev = newNode;
            }
            prev.next = newNode;
        }
        size++;
    }

    public void addFirst(E e) {
        add(0, e);
    }

    public void addLast(E e) {

        add(size, e);
    }

    @Override
    public E get(int index) {
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Get failed. Illegal index.");
        }
        Node cur = head;
        for (int i = 0; i < index; i++) {
            cur = cur.next;
        }
        return cur.e;
    }

    @Override
    public void set(int index, E e) {
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Get failed. Illegal index.");
        }
        Node cur = head;
        for (int i = 0; i < index; i++) {
            cur = cur.next;
        }
        cur.e = e;
    }

    @Override
    public E remove(int index) {
        if (index < 0 || index >= size) {
            throw new IllegalArgumentException("Delete failed. Illegal index.");
        }
        if (index == 0) {
            head = head.next;
            size--;
        }
        Node cur = head;
        for (int i =0; i < index; i++) {
            cur = cur.next;
        }
        if (cur.next != null) {
            cur.next.prev = cur.prev;
        }
        if (cur.prev != null) {
            cur.prev.next = cur.next;
        }
        size--;
        return cur.e;
    }

    public E removeFirst() {
        return remove(0);
    }

    public E removeLast() {
        return remove(size - 1);
    }

    @Override
    public String toString() {
        Node cur = head;
        StringBuilder res = new StringBuilder();
        // for (Node cur = dummyHead.next; cur !=null; cur = cur.next)
        while(cur != null) {
            res.append(cur + " -> ");
            cur = cur.next;
        }
        res.append("NULL");
        return res.toString();
    }

    public static void main(String[] args) {
        DoublyLinkedList<Integer> linkedList = new DoublyLinkedList<>();
        for (int i = 0; i < 5; i++ ) {
            linkedList.addFirst(i);
            System.out.println(linkedList);
        }

        linkedList.add(2, 666);
        System.out.println(linkedList);

        linkedList.remove(2);
        System.out.println(linkedList);

        linkedList.removeFirst();
        System.out.println(linkedList);

        linkedList.removeLast();
        System.out.println(linkedList);
    }
}
