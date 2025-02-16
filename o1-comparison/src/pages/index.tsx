import Head from 'next/head';
import Layout from '@/components/Layout/Layout';
import ProjectHeader from '@/components/ProjectHeader/ProjectHeader';
import TaskBoard from '@/components/TaskBoard/TaskBoard';
import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Project M - Dashboard</title>
      </Head>
      <Layout>
        <div className={styles.container}>
          <ProjectHeader />
          <TaskBoard />
        </div>
      </Layout>
    </>
  );
}