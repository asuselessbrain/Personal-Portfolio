import Loader from '@/app/components/shared/Loader';

const loading = () => {
    return (
        <div className='flex items-center justify-center'>
            <Loader />
        </div>
    );
};

export default loading;