import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import {
  Phone,
  MessageSquare,
  CheckCircle2,
  CalendarClock,
  ShieldCheck,
  ArrowRight,
  RefreshCw,
  Send,
  Calendar as CalendarIcon,
} from "lucide-react";
import { PROBLEMS, SITE, smsLink, telLink } from "@/data/site";
import { Reveal } from "./Reveal";
import { cn } from "@/utils/cn";
import { Card } from "./ui/Card";
import { Badge } from "./ui/Badge";
import { Button } from "./ui/Button";
import { format } from "date-fns";
import { Calendar } from "./ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const TIME_SLOTS = [
  "Morning (8AM–12NN)",
  "Afternoon (12NN–5PM)",
  "Evening (5PM–8PM)",
];

type FormData = {
  name: string;
  mobile: string;
  city: string;
  address: string;
  brand: string;
  problem: string;
  date: Date | undefined;
  time: string;
  notes: string;
};

const EMPTY: FormData = {
  name: "",
  mobile: "",
  city: "",
  address: "",
  brand: "",
  problem: "",
  date: undefined,
  time: TIME_SLOTS[0],
  notes: "",
};

export function Booking() {
  const [data, setData] = useState<FormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof FormData, value: any) => {
    setData((d) => ({ ...d, [key]: value }));
    setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const smsBody = useMemo(() => {
    const lines = [
      "New TV Repair Booking — LimFix",
      `Name: ${data.name || "—"}`,
      `Mobile: ${data.mobile || "—"}`,
      `City: ${data.city || "—"}`,
      `Address: ${data.address || "—"}`,
      `TV Brand: ${data.brand || "—"}`,
      `Problem: ${data.problem || "—"}`,
      `Preferred date: ${data.date ? format(data.date, "PPP") : "—"}`,
      `Preferred time: ${data.time}`,
      `Notes: ${data.notes || "—"}`,
    ];
    return lines.join("\n");
  }, [data]);

  const validate = () => {
    const next: Partial<Record<keyof FormData, string>> = {};
    if (!data.name.trim()) next.name = "Please enter your name.";
    if (!data.mobile.trim()) next.mobile = "Please enter your mobile number.";
    else if (data.mobile.replace(/\D/g, "").length < 10)
      next.mobile = "Enter a valid mobile number.";
    if (!data.city) next.city = "Please choose your city.";
    if (!data.problem) next.problem = "Please pick a problem.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const reset = () => {
    setData(EMPTY);
    setErrors({});
    setSubmitted(false);
  };

  const inputBase =
    "w-full rounded-xl border bg-background px-4 py-3 min-h-[48px] text-sm text-foreground shadow-sm outline-none transition-all placeholder:text-muted-foreground focus:ring-4 focus:shadow-md";

  const fieldClass = (key: keyof FormData) =>
    cn(
      inputBase,
      errors[key]
        ? "border-destructive focus:border-destructive focus:ring-destructive/20"
        : "border-input focus:border-primary focus:ring-primary/20",
    );

  return (
    <section id="book" className="relative bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Card className="relative p-8 sm:p-10 h-full bg-primary border-0 shadow-xl">
              <div className="relative flex h-full flex-col">
                <Badge
                  variant="default"
                  className="w-fit gap-2 uppercase tracking-[0.16em] bg-primary-foreground/15 text-primary-foreground"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  Book a Call
                </Badge>
                <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl text-primary-foreground">
                  Let's get your TV working again
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/90">
                  Fill in a few details and we'll arrange a home visit. Prefer
                  to talk? Reach us directly — we reply fast.
                </p>

                <div className="mt-8 space-y-3">
                  <a
                    href={telLink}
                    className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 p-4 transition-all hover:bg-primary-foreground/15 hover:translate-x-0.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 text-primary-foreground">
                      <Phone className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-primary-foreground/80">
                        Call or text us
                      </p>
                      <p className="text-lg font-bold text-primary-foreground">
                        {SITE.phoneDisplay}
                      </p>
                    </div>
                  </a>
                  <a
                    href={smsLink("Hi LimFix, I'd like to book a TV repair.")}
                    className="flex items-center gap-3 rounded-2xl bg-primary-foreground/10 p-4 transition-all hover:bg-primary-foreground/15 hover:translate-x-0.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15 text-primary-foreground">
                      <MessageSquare className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs text-primary-foreground/80">
                        Send a text
                      </p>
                      <p className="text-sm font-semibold text-primary-foreground">
                        Quick chat to book your slot
                      </p>
                    </div>
                  </a>
                </div>

                <ul className="mt-8 space-y-2.5 text-sm text-primary-foreground/90">
                  <li className="flex items-center gap-2">
                    <CalendarClock className="h-4 w-4 text-primary-foreground/80" />
                    {SITE.hours}
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-4 w-4 text-primary-foreground/80" />
                    Free diagnosis · service warranty
                  </li>
                </ul>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={100}>
            <Card className="h-full p-6 shadow-lg sm:p-8">
              {submitted ? (
                <SuccessState data={data} smsBody={smsBody} onReset={reset} />
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" required error={errors.name}>
                      <input
                        type="text"
                        value={data.name}
                        onChange={(e) => set("name", e.target.value)}
                        placeholder="Juan Dela Cruz"
                        className={fieldClass("name")}
                      />
                    </Field>
                    <Field label="Mobile number" required error={errors.mobile}>
                      <input
                        type="tel"
                        inputMode="tel"
                        value={data.mobile}
                        onChange={(e) => set("mobile", e.target.value)}
                        placeholder="09XX XXX XXXX"
                        className={fieldClass("mobile")}
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Your city" required error={errors.city}>
                      <Select
                        value={data.city}
                        onValueChange={(val) => set("city", val)}
                      >
                        <SelectTrigger
                          className={cn(
                            fieldClass("city"),
                            "h-auto",
                            !data.city && "text-muted-foreground",
                          )}
                        >
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent
                          alignItemWithTrigger={false}
                          align="start"
                        >
                          {SITE.cities.map((c) => (
                            <SelectItem key={c} value={c}>
                              {c}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                    <Field label="Barangay / Address">
                      <input
                        type="text"
                        value={data.address}
                        onChange={(e) => set("address", e.target.value)}
                        placeholder="e.g. Carmen, near ..."
                        className={fieldClass("address")}
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="TV brand (optional)">
                      <input
                        type="text"
                        value={data.brand}
                        onChange={(e) => set("brand", e.target.value)}
                        placeholder="Samsung, LG, TCL..."
                        className={fieldClass("brand")}
                      />
                    </Field>
                    <Field
                      label="What's the problem?"
                      required
                      error={errors.problem}
                    >
                      <Select
                        value={data.problem}
                        onValueChange={(val) => set("problem", val)}
                      >
                        <SelectTrigger
                          className={cn(
                            fieldClass("problem"),
                            "h-auto",
                            !data.problem && "text-muted-foreground",
                          )}
                        >
                          <SelectValue placeholder="Select a problem" />
                        </SelectTrigger>
                        <SelectContent
                          alignItemWithTrigger={false}
                          align="start"
                        >
                          {PROBLEMS.map((p) => (
                            <SelectItem key={p.title} value={p.title}>
                              {p.title}
                            </SelectItem>
                          ))}
                          <SelectItem value="Something else / not sure">
                            Something else / not sure
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Preferred date" className="sm:col-span-2">
                      <Popover>
                        <PopoverTrigger
                          render={
                            <Button
                              variant="outline"
                              className={cn(
                                fieldClass("date"),
                                "flex w-full justify-start text-left font-normal border-input hover:bg-background h-auto",
                                !data.date && "text-muted-foreground",
                              )}
                            />
                          }
                        >
                          <CalendarIcon className="mr-2 h-4 w-4 opacity-50" />
                          {data.date ? (
                            format(data.date, "PPP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={data.date}
                            onSelect={(d) => set("date", d)}
                            disabled={(date) => {
                              const today = new Date();
                              today.setHours(0, 0, 0, 0);
                              return date < today;
                            }}
                          />
                        </PopoverContent>
                      </Popover>
                    </Field>
                    <Field label="Preferred time">
                      <Select
                        value={data.time}
                        onValueChange={(val) => set("time", val)}
                      >
                        <SelectTrigger
                          className={cn(fieldClass("time"), "h-auto")}
                        >
                          <SelectValue placeholder="Select time" />
                        </SelectTrigger>
                        <SelectContent
                          alignItemWithTrigger={false}
                          align="start"
                        >
                          {TIME_SLOTS.map((t) => (
                            <SelectItem key={t} value={t}>
                              {t}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </Field>
                  </div>
                  <Field label="Additional details (optional)">
                    <textarea
                      value={data.notes}
                      onChange={(e) => set("notes", e.target.value)}
                      rows={3}
                      placeholder="Tell us more about what your TV is doing..."
                      className={cn(fieldClass("notes"), "resize-none")}
                    />
                  </Field>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="h-4 w-4" />
                    Confirm Booking Request
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <p className="text-center text-xs text-muted-foreground">
                    No payment now. We'll confirm your slot and give a free
                    quote on site.
                  </p>
                </form>
              )}
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  error,
  children,
  className,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
        {required && <span className="ml-0.5 text-destructive">*</span>}
      </span>
      {children}
      {error && (
        <span className="mt-1 block text-xs text-destructive">{error}</span>
      )}
    </label>
  );
}

function SuccessState({
  data,
  smsBody,
  onReset,
}: {
  data: FormData;
  smsBody: string;
  onReset: () => void;
}) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-col items-center text-center">
        <span className="relative inline-flex h-16 w-16 items-center justify-center">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-50" />
          <span className="relative inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30">
            <CheckCircle2 className="h-9 w-9" />
          </span>
        </span>
        <h3 className="mt-5 text-2xl font-bold text-foreground">
          Booking ready, {data.name.split(" ")[0]}!
        </h3>
        <p className="mt-2 max-w-md text-sm text-muted-foreground">
          Send your request to confirm. Tap below to text us the details — we'll
          reply to lock in your home visit.
        </p>
      </div>

      <Card className="mt-6 p-5 bg-muted/30">
        <dl className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
          <SummaryItem label="City" value={data.city} />
          <SummaryItem label="Problem" value={data.problem} />
          <SummaryItem label="Mobile" value={data.mobile} />
          <SummaryItem label="TV Brand" value={data.brand || "—"} />
          <SummaryItem
            label="Date"
            value={data.date ? format(data.date, "PPP") : "Flexible"}
          />
          <SummaryItem label="Time" value={data.time} />
        </dl>
      </Card>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Button asChild size="lg">
          <a href={smsLink(smsBody)}>
            <MessageSquare className="h-4 w-4" />
            Send via Text
          </a>
        </Button>
        <Button asChild variant="outline" size="lg">
          <a href={telLink}>
            <Phone className="h-4 w-4" />
            Call {SITE.phoneDisplay}
          </a>
        </Button>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        <RefreshCw className="h-4 w-4" />
        Edit my details
      </button>
    </div>
  );
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </dt>
      <dd className="font-medium text-foreground">{value || "—"}</dd>
    </div>
  );
}
