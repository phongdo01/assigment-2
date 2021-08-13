using System;
using System.IO;
using System.Text;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            const int NUMBER_OF_STUDENT = 7;
            String[] students = new string[NUMBER_OF_STUDENT];
            String[] marks = new string[NUMBER_OF_STUDENT];
            int count = 0;
            Console.WriteLine("Input name of 7 students, complete by [ENTER]:");
            for (int i=0; i<NUMBER_OF_STUDENT; i++)
            {
                students[i] = Console.ReadLine().ToString();
            }
            File.WriteAllLines("Name.txt", students, Encoding.UTF8);
            string[] readStudent = File.ReadAllLines("Name.txt", Encoding.UTF8);
            foreach (string s in readStudent)
            {
                string mark;
                Console.WriteLine("Input mark of "+s+" :");
                mark = Console.ReadLine();
                marks[count] = mark;
                count++;
            }
            File.WriteAllLines("Marks.txt", marks, Encoding.UTF8);
            string[] readMark = File.ReadAllLines("Marks.txt", Encoding.UTF8);
            decimal total = 0;
            decimal maxMark = 0;
            int maxIndex = 0;
            decimal minMark = 9999.0M;
            int minIndex = 0;
            for (int i = 0; i < NUMBER_OF_STUDENT; i++)
            {
                decimal mark = decimal.Parse(readMark[i]);
                total += mark;
                Console.WriteLine(mark + "vs" + minMark);
                if (maxMark < mark)
                {
                    maxMark = mark;
                    maxIndex = i;
                };
                if (minMark > mark)
                {
                    Console.WriteLine("go there");
                    minMark = mark;
                    minIndex = i;
                };

                Console.WriteLine("Mark of "+readStudent[i]+" is "+readMark[i]);
            }
            Console.WriteLine("Average of class is: "+ (total/NUMBER_OF_STUDENT));
            Console.WriteLine(readStudent[maxIndex] + " has highest score with " + readMark[maxIndex]);
            Console.WriteLine(readStudent[minIndex] + " has lowest score with " + readMark[minIndex]);
        }
    }
}
