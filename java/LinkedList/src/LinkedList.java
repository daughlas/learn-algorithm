public interface LinkedList<E> {
    int getSize();
    boolean isEmpty();
    void add (int index, E e);
    E get(int index);
    void set(int index, E e);
    E remove(int index);
}
