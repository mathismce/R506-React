import Team from '@/app/ui/Team/index';
import { fetchTeams } from '@/app/lib/data';

export default async function Page() {
  let team = await fetchTeams();
    return (
    <Team team={team}></Team>
    );
  }