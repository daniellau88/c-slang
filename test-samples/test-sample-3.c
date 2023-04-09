void qsort(void *base, int nmemb, int size, int (*compar)(void *, void *)) {
  char *arr = (char *)base;

  if (nmemb <= 1) {
    return;
  }

  char *pivot = arr + (nmemb - 1);
  char *i = arr - size;

  for (char *j = arr; j < pivot; j += size) {
    if ((*compar)(j, pivot) < 0) {
      i += size;
      char_swap(i, j, size);
    }
  }

  i += size;
  char_swap(i, pivot, size);

  qsort(arr, (i - arr) / size, size, compar);
  qsort(i + size, (arr + nmemb * size - i - size) / size, size, compar);
}

void char_swap(char *a, char *b, int size) {
  for (int i = 0; i < size; i++) {
    char temp = a[i];
    a[i] = b[i];
    b[i] = temp;
  }
}

int cmpfunc(void *a, void *b) {
  return (*(int*)a - *(int*)b);
}

int main() {
  int n = 10;
  int arr[n];

  int seed = 1;

  for (int i = 0; i < n; i++) {
    seed = 1103515245 * seed + 12345;
    arr[i] = (int)(seed / 65536) % 100;
  }

  for (int i = 0; i < n; i++) {
    printfLog(arr[i]);
  }

  qsort(arr, n, 1, &cmpfunc);

  for (int i = 0; i < n; i++) {
    printfLog(arr[i]);
  }

  return 0;
}
