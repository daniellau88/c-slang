void printstr(char *str) {
  while (*str != '\0') {
    printfLog(*str);
    str++;
  }
}

int strlen(char *str) {
  int len = 0;

  while (*str != '\0') {
    len++;
    str++;
  }

  return len;
}

void reverse(char *str) {
  printfLog(str);
  int len = strlen(str);
  int i;

  for (i = 0; i < len / 2; i++) {
    char tmp = str[i];
    str[i] = str[len - i - 1];
    str[len - i - 1] = tmp;
  }
}

int main() {
  int n = 10;
  int factorial = 1;

  for (int i = 1; i <= n; i++) {
    factorial *= i;
  }

  char str[20];
  int j = 0;
  while (factorial > 0) {
    str[j++] = (factorial % 10) + '0';
    factorial /= 10;
  }
  str[j] = '\0';
  reverse(str);

  char msg[] = "5! = ";
  printstr(msg);
  printstr(str);

  return 0;
}
