import { type User, type InsertUser, type Appointment, type InsertAppointment, type Newsletter, type InsertNewsletter } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAllAppointments(): Promise<Appointment[]>;
  getAppointmentById(id: string): Promise<Appointment | undefined>;
  updateAppointmentStatus(id: string, status: string): Promise<Appointment | undefined>;
  subscribeNewsletter(newsletter: InsertNewsletter): Promise<Newsletter>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private appointments: Map<string, Appointment>;
  private newsletters: Map<string, Newsletter>;

  constructor() {
    this.users = new Map();
    this.appointments = new Map();
    this.newsletters = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = {
      ...insertAppointment,
      id,
      status: "pending",
      createdAt: new Date(),
      notes: insertAppointment.notes || null,
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAllAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getAppointmentById(id: string): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async updateAppointmentStatus(id: string, status: string): Promise<Appointment | undefined> {
    const appointment = this.appointments.get(id);
    if (appointment) {
      appointment.status = status;
      this.appointments.set(id, appointment);
      return appointment;
    }
    return undefined;
  }

  async subscribeNewsletter(insertNewsletter: InsertNewsletter): Promise<Newsletter> {
    const id = randomUUID();
    const newsletter: Newsletter = {
      ...insertNewsletter,
      id,
      subscribedAt: new Date(),
    };
    this.newsletters.set(id, newsletter);
    return newsletter;
  }
}

export const storage = new MemStorage();
