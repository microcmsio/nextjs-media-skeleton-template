type Props = {
  content: string;
};

export default function RichEditor({ content }: Props) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: content,
      }}
    />
  );
}
