namespace WebApplication1.Models;

public class MyList<T> where T: IComparable
{
    public IEnumerable<T> InnerEnumerable { get; set; }

    public MyList(IEnumerable<T> enumerable)
    {
        InnerEnumerable = enumerable;
    }

    public IEnumerable<T> Reverse()
    {
        var stack = new Stack<T>();
        foreach (var e in InnerEnumerable)
        {
            stack.Push(e);
        }

        while (stack.TryPop(out var e))
        {
            yield return e;
        }
    }
    
    public IEnumerable<T> HeapSort()
    {
        var arr = InnerEnumerable.ToArray();
        var length = arr.Length;

        for (var i = length / 2 - 1; i >= 0; i--)
        {
            Heapify(arr, length, i);
        }

        for (var i = length - 1; i >= 0; i--)
        {
            (arr[0], arr[i]) = (arr[i], arr[0]);
            Heapify(arr, i, 0);
        }

        return arr;
    }
    
    private void Heapify(T[] arr, int length, int index)
    {
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

        if (largest == index)
        {
            return;
        }
        
        (arr[index], arr[largest]) = (arr[largest], arr[index]);
        Heapify(arr, length, largest);
    }
}