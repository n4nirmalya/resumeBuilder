import Im from '../../MAHA KALL.jpg';

export const Resume = ({ props }) => {
    console.log('🚀 ~ file: Resume.js ~ line 4 ~ Resume ~ props', props);
    return (
        <div className='flex items-center justify-center mt-5'>
            <div className='bg-blue-900 w-1/8 p-10 h-auto'>
                <div className='flex items-center justify-center mb-10'>
                    <img
                        src={Im}
                        alt=''
                        className='rounded-full w-32 border-2 border-gray-300'
                    />
                </div>
                {
                    <h1 className='text-gray-400 uppercase tracking-widest text-lg font-bold'>
                        {`${props.firstName} ${props.lastName}`}
                    </h1>
                }
                {<h5>{props.profession}</h5>}
                <hr className='w-1/6 mb-5' />
                <h1 className='bg-indigo-400 pl-1.5 text-gray-400 uppercase tracking-widest text-lg font-bold'>
                    Contact
                </h1>
                <hr className='w-1/6 mb-4' />
                <h1 className='text-gray-400 text-md font-semibold'>Address</h1>
                {
                    <h1 className='text-gray-400 text-sm'>{`${
                        props.city ? props.city : 'Bhubaneswar'
                    } ${props.state ? props.state : 'Odisha'} ${
                        props.zip ? props.zip : 746321
                    }`}</h1>
                }
                <hr className='w-1/6 mb-4' />
                {props.phone && (
                    <div>
                        <h1 className='text-gray-400 text-md font-semibold'>
                            Phone
                        </h1>
                        <h1 className='text-gray-400 text-sm'>{props.phone}</h1>
                    </div>
                )}
                {props.phone && <hr className='w-1/6 mb-4' />}
                {props.email && (
                    <div>
                        <h1 className='text-gray-400 text-md font-semibold'>
                            E-mail
                        </h1>
                        <h1 className='text-gray-400 text-sm'>{props.email}</h1>
                    </div>
                )}
                {props.email && <hr className='w-1/6 mb-4' />}
                {props.inputList &&
                    props.inputList.map((data) => {
                        return (
                            <div>
                                <h1 className='text-gray-400 text-md font-semibold'>
                                    {data.socialAccount}
                                </h1>
                                <h1 className='text-gray-400 text-sm'>
                                    {data.link}
                                </h1>
                            </div>
                        );
                    })}
                <hr className='my-3' />
                <h1 className='text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold'>
                    EDUCATION
                </h1>
                <hr className='w-1/6 mb-5' />
                <h1 className='text-gray-400 text-sm uppercase font-semibold tracking-wider'>
                    Master of Science
                </h1>
                <h1 className='text-gray-500 text-sm'>
                    <span className='italic'>University Name</span>,{' '}
                    <span className='text-gray-400 font-semibold italic'>
                        New York
                    </span>{' '}
                    / 2012-2013
                </h1>
                <br />
                <h1 className='text-gray-400 text-sm uppercase font-semibold tracking-wider'>
                    Bachelor of Arts
                </h1>
                <h1 className='text-gray-500 text-sm'>
                    <span className='italic'>College Name Here</span>,{' '}
                    <span className='text-gray-400 font-semibold italic'>
                        London
                    </span>{' '}
                    / 2011-2012
                </h1>
                <hr className='my-5' />
                <h1 className='text-gray-400 mt-2 uppercase tracking-widest text-lg font-bold'>
                    SKILLS
                </h1>
                <hr className='w-1/6 mb-5' />
                <ul>
                    <li className='text-gray-500 text-sm list-disc ml-4'>
                        Adobe Photoshop
                    </li>
                    <li className='text-gray-500 text-sm list-disc ml-4'>
                        Adobe Illustrator
                    </li>
                    <li className='text-gray-500 text-sm list-disc ml-4'>
                        Adobe After Effects
                    </li>
                    <li className='text-gray-500 text-sm list-disc ml-4'>
                        Microsoft Power Point
                    </li>
                    <li className='text-gray-500 text-sm list-disc ml-4'>
                        Microsoft Word
                    </li>
                    <li className='text-gray-500 text-sm list-disc ml-4 mb-1'>
                        Adobe InDesign
                    </li>
                </ul>
            </div>

            <div className='bg-white w-7/12 p-10 h-auto'>
                <h1 className='font-bold'>TITLE</h1>
                <p className='text-gray-500'>
                    A resourceful individual with a proven track record in
                    implementing successful marketing strategies, boosting
                    organic traffic, and improving search rankings seeks a
                    position of Marketing Associate at ABC company to maximize
                    brand awareness and revenue through integrated marketing
                    communications.
                </p>
                <h1 className='font-semibold uppercase tracking-wider my-6 text-gray-500'>
                    Work History
                </h1>
                {props.workHistoryFormData &&
                    props.workHistoryFormData.map((work, index) => {
                        return (
                            <div key={index}>
                                <h1 className='text-gray-600 font-bold uppercase text-lg'>
                                    {`${work.title}`}
                                    {work.startDate &&
                                        '  (' +
                                            new Date(
                                                work.startDate
                                            ).toLocaleDateString('en-US')}{' '}
                                    {work.startDate &&
                                        work.endDate &&
                                        ' - ' +
                                            new Date(
                                                work.endDate
                                            ).toLocaleDateString('en-US') +
                                            ')'}
                                </h1>
                                <h1 className='text-gray-400 text-sm font-semibold'>
                                    {work.employer}
                                    {`${work.city ? ', ' + work.city : ``}`}
                                    {work.state ? ', ' + work.state : ``}
                                </h1>
                                <h1 className='text-gray-400 text-sm'>
                                    {work.description}
                                </h1>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};
