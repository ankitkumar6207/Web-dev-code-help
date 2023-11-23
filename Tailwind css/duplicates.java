import java.util.*;
class duplicates{

    static int removeDuplicates(int arr[])
    {
          int j=1;
        for(int i = 1;i<arr.length;i++)
        {
            if(arr[i] != arr[i-1])
            {
                 arr[j]=arr[i];
                 j++;
            }
        }
        return j;

        
    }
    public static void main(String ar[])
    {
        int unique;
        int arr[]={0,0,0,1,1,2};
        unique = removeDuplicates(arr);
        System.out.print(unique);
        System.out.print(Arrays.toString(arr));
      

    }
}