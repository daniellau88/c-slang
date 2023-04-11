void printstr(char *str) {
  while (*str != '\0') {
    printfLog(*str);
    str++;
  }
}

char *strncat(char *dest, char *src, int n) {
  char *dest_end = dest + strlen(dest);
  while (n-- > 0 && *src != '\0') {
    *dest_end++ = *src++;
  }
  *dest_end = '\0';
  return dest;
}

int strlen(char *s) {
  int len = 0;
  while (*s != '\0') {
    len++;
    s++;
  }
  return len;
}

char *strcpy(char *dest, char *src) {
  char *dest_start = dest;
  while (*src != '\0') {
    *dest++ = *src++;
  }
  *dest = '\0';
  return dest_start;
}

int toupper(int c) {
  if (c >= 'a' && c <= 'z') {
    return c - 'a' + 'A';
  } else {
    return c;
  }
}

int main() {
  char str1[20] = "hello";
  char str2[20] = "world";
  int n = 3;

  strncat(str1, str2, n);

  int len = strlen(str1);

  char *copy = (char *) malloc((len + 1) * sizeof(char));

  strcpy(copy, str1);

  int i;
  for (i = 0; i < len; i++) {
      copy[i] = toupper(copy[i]);
  }

  printstr(copy);

  free(copy);

  return 0;
}
