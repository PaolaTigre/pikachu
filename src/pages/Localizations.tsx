import {fetchRickAndMorty, rickAndMortyLocalizations} from "../services/rickAndMorty";
import useSWR from 'swr';
import React from 'react';
import styles from './character.module.css'
import AntCard from "../components/AndCardDos";

interface LocalizationsData {
    results: Array<{
        name:string;
        episode: string;
        key:number;
        
    }>;
}

export const Localizations: React.FC = () => {
    const {data} = useSWR<LocalizationsData>(rickAndMortyLocalizations, fetchRickAndMorty, {
        suspense: false,
    });

    return (
        <>
            <h1>Localizations</h1>

            <div className={styles.container}>
                {data?.results.map((localizations) => (
                    <AntCard key={localizations.key} name={localizations.name} episode={localizations.episode} ></AntCard>
                ))}
            </div>


        </>
    );
};

