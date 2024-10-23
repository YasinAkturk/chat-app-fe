'use client'
import React from "react";
import { useForm } from 'react-hook-form';
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from '@radix-ui/react-icons';
import { CheckIcon } from "lucide-react";

interface ICommandProps {
  commands: { value: string; label: string }[];
}

export default function CommandSearch() {

  return (
    <Command >
      <CommandInput placeholder="Type a command or search..." />
    </Command>
  );
}
