"use client";
import { SettingsTabs } from "@/components/SettingsTabs";
import * as Input from "@/components/Input";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "@/components/Form/FileInput";
import { Select } from "@/components/Form/Select";
import { SelectItem } from "@/components/Form/Select/SelectItem";
import { Textarea } from "@/components/Textarea";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl font-medium text-zinc-900 dark:text-zinc-100">
        Configurações
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex flex-col justify-between gap-4 border-b border-zinc-200 pb-5 lg:flex-row lg:items-center dark:border-zinc-700">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Informações Pessoais
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Atualizar informações
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
            >
              Save
            </button>
          </div>
        </div>

        <form
          id="settings"
          className="mt-6 flex w-full flex-col gap-5 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col gap-3 lg:grid lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Nome
            </label>
            <div className="flex flex-col gap-6 lg:grid lg:grid-cols-2">
              <Input.Root>
                <Input.Control placeholder="Nome" />
              </Input.Root>

              <div className="flex flex-col gap-3 lg:block">
                <label
                  htmlFor="firstName"
                  className="text-sm font-medium text-zinc-700 lg:sr-only dark:text-zinc-300"
                >
                  Sobrenome
                </label>
                <Input.Root>
                  <Input.Control id="lastName" placeholder="Sobrenome" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control id="email" placeholder="Digite seu email" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Foto
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Envie sua foto.
              </span>
            </label>
            <div>
              <FileInput.Root className="flex flex-col gap-5 lg:flex-row lg:items-start">
                <FileInput.ImagePreview />
                <FileInput.Trigger />
                <FileInput.Control />
              </FileInput.Root>
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Profissão
            </label>
            <Input.Root>
              <Input.Control id="role" placeholder="Digite sua profissão" />
            </Input.Root>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Região
            </label>

            <Select placeholder="Selecione uma região...">
              <SelectItem value="sa" text="America do Sul" />
              <SelectItem value="na" text="North America" />
              <SelectItem value="eu" text="Europe" />
            </Select>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Escreva uma breve introdução
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem
                    value="normal"
                    defaultChecked
                    text="Normal Text"
                  />
                  <SelectItem value="md" text="Markdown" />
                </Select>

                <div className="flex items-center gap-1">
                  <button
                    title="Bold"
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    <Bold className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    title="Italic"
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    <Italic className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    title="Link"
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    <Link className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    title="List"
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    <List className="h-5 w-5 text-zinc-500" strokeWidth={3} />
                  </button>
                  <button
                    title="ListOrdered"
                    type="button"
                    className="rounded-md p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                  >
                    <ListOrdered
                      className="h-5 w-5 text-zinc-500"
                      strokeWidth={3}
                    />
                  </button>
                </div>
              </div>

              <Textarea id="bio" placeholder="Escreva sua bio aqui..." />
            </div>
          </div>

          <div className="flex flex-col gap-3 pt-5 lg:grid lg:grid-cols-form">
            <label
              htmlFor="github"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Github e/ou Portfólio
              <span className="mt-0.5 block text-sm font-normal text-zinc-500">
                Digite o Link do Github e/ou Portfólio
              </span>
            </label>
            <Textarea id="github" placeholder="Digite aqui..." />
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <button
              type="button"
              className="rounded-lg border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              form="settings"
              className="rounded-lg bg-violet-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
