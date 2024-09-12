const CurrentWork = () => (
    <article className="mt-10 space-y-4">
        <h3 className='text-3xl font-semibold mb-4'>What am I currently working on?</h3>
        <p>
            I'm currently working on a home server. I built the server using some leftover parts from my last pc build as well as new case, hard drive and motherboard.
        </p>
        <p>
            A single 8TB Seagate Ironwolf hard drive is being used as my main storage with plans to add more in the future.
        </p>
        <p>
            I'm using TrueNAS, a open-source network-attached storage (NAS) operating system because of its use of the ZFS file system and its ability to easily customize and expand functionality with a variety of free apps.
        </p>
        <p>
            I was also drawn to TrueNas because of its SCALE web UI that allows me to access my home server without the terminal, a feature which my previous Ubuntu home server did not have.
        </p>
        <p>
            I hope to use this server as a NAS for storage, provide whole home ad-blocking, and a multimedia server such as Plex.
        </p>
    </article>
)

export default CurrentWork