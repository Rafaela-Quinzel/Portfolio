import * as React from 'react'

type ToastProps = {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  variant?: 'default' | 'success' | 'error' | 'warning'
  children: React.ReactNode
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  return <div className="fixed inset-0 pointer-events-none z-[100]">{children}</div>
}

export function ToastViewport() {
  return <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-[101]" />
}

export function ToastTitle({ children }: { children?: React.ReactNode }) {
  return <div className="text-sm font-semibold text-white">{children}</div>
}

export function ToastDescription({ children }: { children?: React.ReactNode }) {
  return <div className="text-xs text-gray-300">{children}</div>
}

export function ToastClose() {
  const ctx = React.useContext(ToastItemContext)
  return (
    <button
      type="button"
      aria-label="Fechar"
      onClick={() => ctx?.onOpenChange?.(false)}
      className="ml-auto text-gray-400 hover:text-white transition-colors"
    >
      ×
    </button>
  )
}

const ToastItemContext = React.createContext<{ onOpenChange?: (open: boolean) => void } | null>(null)

export function Toast({ open = true, onOpenChange, variant = 'default', children }: ToastProps) {
  if (!open) return null
  const variantClasses =
    variant === 'success'
      ? 'bg-green-600/20 border-green-500/40'
      : variant === 'error'
      ? 'bg-red-600/20 border-red-500/40'
      : variant === 'warning'
      ? 'bg-yellow-600/20 border-yellow-500/40'
      : 'bg-white/10 border-white/20'

  return (
    <ToastItemContext.Provider value={{ onOpenChange }}>
      <div className="fixed bottom-4 right-4 z-[101]">
        <div
          role="status"
          className={`pointer-events-auto min-w-[280px] max-w-[360px] rounded-md border px-3 py-2 shadow-lg backdrop-blur ${variantClasses}`}
        >
          <div className="flex items-start gap-3">
            <div className="grid gap-1">{children}</div>
            <ToastClose />
          </div>
        </div>
      </div>
    </ToastItemContext.Provider>
  )
}
