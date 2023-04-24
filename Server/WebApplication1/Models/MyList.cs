namespace WebApplication1.Models;

public class MyList<T> where T: IComparable
{
    // Определяем свойство InnerEnumerable для хранения элементов списка
    public IEnumerable<T> InnerEnumerable { get; set; }

    // Определяем конструктор, который инициализирует список InnerEnumerable
    public MyList(IEnumerable<T> enumerable)
    {
        InnerEnumerable = enumerable;
    }

    // Определяем метод Reverse для обращения порядка элементов списка
    public IEnumerable<T> Reverse()
    {
        // Создаем стек и помещаем в него элементы списка
        var stack = new Stack<T>();
        foreach (var e in InnerEnumerable)
        {
            stack.Push(e);
        }

        // Извлекаем элементы из стека и возвращаем их
        while (stack.TryPop(out var e))
        {
            yield return e;
        }
    }

    // Определяем метод HeapSort для сортировки списка с использованием алгоритма HeapSort
    public IEnumerable<T> HeapSort()
    {
        // Копируем элементы списка в массив и определяем его длину
        var arr = InnerEnumerable.ToArray();
        var length = arr.Length;

        // Строим кучу на основе массива
        for (var i = length / 2 - 1; i >= 0; i--)
        {
            Heapify(arr, length, i);
        }

        // Сортируем элементы массива, выполняя операцию Heapify
        for (var i = length - 1; i >= 0; i--)
        {
            (arr[0], arr[i]) = (arr[i], arr[0]);
            Heapify(arr, i, 0);
        }

        // Возвращаем отсортированный массив
        return arr;
    }

    // Определяем метод Heapify для поддержки алгоритма HeapSort
    private void Heapify(T[] arr, int length, int index)
    {
        // Находим индекс наибольшего элемента
        var largest = index;
        var left = 2 * index + 1;
        var right = 2 * index + 2;

        if (left < length &&  arr[left].CompareTo(arr[largest]) > 0)
        {
            largest = left;
        }

        if (right < length && arr[right].CompareTo(arr[largest]) > 0)
        {
            largest = right;
        }

        // Если наибольший элемент уже является корневым, завершаем метод
        if (largest == index)
        {
            return;
        }
    
        // Меняем местами корневой элемент и наибольший элемент
        (arr[index], arr[largest]) = (arr[largest], arr[index]);
        Heapify(arr, length, largest);
    }

}