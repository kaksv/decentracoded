import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
// import { signOut } from '@/auth';
import DecentracodeLogo from '@/app/ui/decentracode-logo';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 ">
      <Link
        className="mb-2 flex h-20 items-end sm:justify-center rounded-md bg-gray-200 p-4 md:h-40 shadow-2xl"
        href="/dashboard"
        
      >
        <div className="w-32 text-white md:w-40">
          <DecentracodeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
         {/* <form
          action={
           async () => {
            'use server';
             await signOut();
          }
         }
        > */}
          <div className="flex flex-row  grow gap-2 rounded-md bg-gray-50 shadow-xl p-2 md:flex-none md:justify-center md:p-1 md:px-1">
         
          <Link href='https://x.com/Decentracod?t=CgGjEScm0jfGFtEd4pcr8Q&s=09'> 
          <svg className='w-6' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48">
          <path fill="#03a9f4" d="M24,4C12.954,4,4,12.954,4,24s8.954,20,20,20s20-8.954,20-20S35.046,4,24,4z"></path><path fill="#fff" d="M36,17.12c-0.882,0.391-1.999,0.758-3,0.88c1.018-0.604,2.633-1.862,3-3	c-0.951,0.559-2.671,1.156-3.793,1.372C29.789,13.808,24,14.755,24,20v2c-4,0-7.9-3.047-10.327-6c-2.254,3.807,1.858,6.689,2.327,7	c-0.807-0.025-2.335-0.641-3-1c0,0.016,0,0.036,0,0.057c0,2.367,1.661,3.974,3.912,4.422C16.501,26.592,16,27,14.072,27	c0.626,1.935,3.773,2.958,5.928,3c-2.617,2.029-7.126,2.079-8,1.977c8.989,5.289,22.669,0.513,21.982-12.477	C34.95,18.818,35.342,18.104,36,17.12"></path>
          </svg>
          </Link>

          <Link href='https://t.me/Decentracode'>
          <svg className='w-6' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48">
          <path fill="#29b6f6" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><path fill="#fff" d="M34,15l-3.7,19.1c0,0-0.2,0.9-1.2,0.9c-0.6,0-0.9-0.3-0.9-0.3L20,28l-4-2l-5.1-1.4c0,0-0.9-0.3-0.9-1	c0-0.6,0.9-0.9,0.9-0.9l21.3-8.5c0,0,0.7-0.2,1.1-0.2c0.3,0,0.6,0.1,0.6,0.5C34,14.8,34,15,34,15z"></path><path fill="#b0bec5" d="M23,30.5l-3.4,3.4c0,0-0.1,0.1-0.3,0.1c-0.1,0-0.1,0-0.2,0l1-6L23,30.5z"></path><path fill="#cfd8dc" d="M29.9,18.2c-0.2-0.2-0.5-0.3-0.7-0.1L16,26c0,0,2.1,5.9,2.4,6.9c0.3,1,0.6,1,0.6,1l1-6l9.8-9.1	C30,18.7,30.1,18.4,29.9,18.2z"></path>
          </svg>
          </Link>

          <Link href='https://www.linkedin.com/company/decentracode/'>
          <svg className='w-6' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48">
          <path fill="#0288d1" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z"></path><rect width="4" height="15" x="14" y="19" fill="#fff"></rect><path fill="#fff" d="M16,17L16,17c-1.2,0-2-0.9-2-2c0-1.1,0.8-2,2-2c1.2,0,2,0.9,2,2C18,16.1,17.2,17,16,17z"></path><path fill="#fff" d="M35,24.5c0-3-2.5-5.5-5.5-5.5c-1.9,0-3.5,0.9-4.5,2.3V19h-4v15h4v-8c0-1.7,1.3-3,3-3s3,1.3,3,3v8h4	C35,34,35,24.9,35,24.5z"></path>
          </svg>
          </Link>
          <Link href='https://discord.gg/rbGZ4UFW'>
          <svg className='w-6'  xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48">
          <path fill="#536dfe" d="M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"></path>
          </svg>
          </Link>

          <Link href='https://www.youtube.com/@Decentracode'>
          <svg className='w-6' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30px" height="30px" viewBox="0 0 48 48">
          <path fill="#f44336" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5 V37z"></path><path fill="#fff" d="M36.499,25.498c-0.276-0.983-1.089-1.758-2.122-2.021C32.506,23,24,23,24,23s-8.506,0-10.377,0.478 c-1.032,0.263-1.846,1.037-2.122,2.021C11,27.281,11,31,11,31s0,3.719,0.501,5.502c0.276,0.983,1.089,1.758,2.122,2.021 C15.494,39,24,39,24,39s8.505,0,10.377-0.478c1.032-0.263,1.846-1.037,2.122-2.021C37,34.719,37,31,37,31S37,27.281,36.499,25.498z"></path><path fill="#f44336" d="M16.333 37L14.667 37 14.667 26.655 13 26.655 13 25 18 25 18 26.655 16.333 26.655zM23 37h-1.5l-.167-1.132C20.675 36.579 19.892 37 19.283 37c-.533 0-.908-.231-1.092-.653C18.083 36.083 18 35.687 18 35.092V27.5h1.667v7.757c.042.24.217.33.433.33.333 0 .867-.363 1.233-.843V27.5H23V37zM35 32.663v-2.701c0-.777-.192-1.338-.533-1.702-.458-.496-1.117-.76-1.942-.76-.842 0-1.492.264-1.967.76C30.2 28.623 30 29.218 30 29.995v4.593c0 .768.225 1.313.575 1.669C31.05 36.752 31.7 37 32.567 37c.858 0 1.533-.256 1.983-.785.2-.231.333-.496.392-.785C34.95 35.298 35 34.943 35 34.522h-1.667v.661c0 .38-.375.694-.833.694s-.833-.314-.833-.694v-2.52H35zM31.667 29.392c0-.388.375-.694.833-.694s.833.306.833.694v2.123h-1.667V29.392zM28.783 28.492c-.208-.646-.717-1.001-1.35-1.01-.808-.008-1.142.414-1.767 1.142V25H24v12h1.5l.167-1.034C26.192 36.611 26.875 37 27.433 37c.633 0 1.175-.331 1.383-.977.1-.348.175-.67.183-1.399V30.28C29 29.461 28.892 28.84 28.783 28.492zM27.333 34.41c0 .869-.2 1.167-.65 1.167-.258 0-.75-.174-1.017-.439v-5.686c.267-.265.758-.521 1.017-.521.45 0 .65.273.65 1.142V34.41z"></path><path fill="#fff" d="M15 9l1.835.001 1.187 5.712.115 0 1.128-5.711 1.856-.001L19 16.893V21h-1.823l-.003-3.885L15 9zM21.139 14.082c0-.672.219-1.209.657-1.606.437-.399 1.024-.6 1.764-.601.675 0 1.225.209 1.655.63.429.418.645.96.645 1.622l.003 4.485c0 .742-.209 1.326-.63 1.752C24.812 20.788 24.234 21 23.493 21c-.714 0-1.281-.221-1.712-.656-.428-.435-.64-1.023-.641-1.76l-.003-4.503L21.139 14.082 21.139 14.082zM22.815 18.746c0 .236.057.423.178.553.115.128.279.193.495.193.221 0 .394-.066.524-.201.129-.129.196-.314.196-.547l-.003-4.731c0-.188-.069-.342-.201-.459-.131-.116-.305-.175-.519-.175-.199 0-.361.06-.486.176-.124.117-.186.271-.186.459L22.815 18.746zM32 12v9h-1.425l-.227-1.1c-.305.358-.622.63-.953.815C29.067 20.901 28.747 21 28.437 21c-.384 0-.671-.132-.866-.394-.195-.259-.291-.65-.291-1.174L27.276 12h1.653l.004 6.825c0 .204.036.355.106.449.066.09.183.14.335.14.124 0 .278-.062.46-.186.188-.122.358-.281.512-.471L30.344 12 32 12z"></path>
          </svg>
          </Link>

          </div >
          <button className="hidden md:block  w-full grow items-center justify-center gap-2 rounded-md bg-gray-100 shadow-xl p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 space-x-2">
            <PowerIcon className="w-6" />
            <div className="hidden md:block -bottom-4">Sign Out</div>
          </button>
        {/* </form> */}
      </div>
    </div>
  );
}
