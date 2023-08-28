import { Tag as TagType } from '@/_libs/microcms';
import Tag from '@/_components/Tag';
import styles from './index.module.css';

type Props = {
  tags: TagType[];
};

export default function Tags({ tags }: Props) {
  return (
    <ul className={styles.tags}>
      {tags.map((tag) => (
        <li key={tag.id}>
          <Tag tag={tag} />
        </li>
      ))}
    </ul>
  );
}
