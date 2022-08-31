import useSWR from "swr";

/* WRAPPER FUNCTION FOR FETCH API */
const fetcher = (...args) => fetch(...args).then(res => res.json());

export function useTrainees() {
    const { data, error } = useSWR("https://goncar-system-backend.herokuapp.com/api/trainees", fetcher);

    return {
        trainees: data,
        isTraineesLoading: !error && !data,
        isTraineesError: error
    }
}

export function useBatches() {
    const { data, error } = useSWR("https://goncar-system-backend.herokuapp.com/api/batches", fetcher);

    return {
        batches: data,
        isBatchesLoading: !error && !data,
        isBatchesError: error
    }
}

export function useTrainee(id) {
    const { data, error } = useSWR(`https://goncar-system-backend.herokuapp.com/api/trainees/${id}`, fetcher);

    return {
        trainee: data,
        isTraineeLoading: !error && !data,
        isTraineeError: error
    }
}