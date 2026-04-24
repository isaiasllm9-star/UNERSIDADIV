import java.util.Scanner;

public class ProgramaConsola {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Nombre: ");
        String nombre = scanner.nextLine();
        
        System.out.print("Apellido: ");
        String apellido = scanner.nextLine();
        
        System.out.print("Edad: ");
        int edad = scanner.nextInt();
        
        System.out.print("Altura: ");
        double altura = scanner.nextDouble();
        
        System.out.println("\nHola, mi nombre es " + nombre + " " + apellido + " y tengo " + edad + " años.");
        
        scanner.close();
    }
}
