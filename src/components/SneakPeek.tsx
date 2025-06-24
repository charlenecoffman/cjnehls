import React, {useState} from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import { addToMailingList, isAlreadyOnMailingList } from '../clients/ApiClient';
import { sendSneakPeekEmail } from '../clients/EmailClient';

export const SneakPeek: React.FC = () => {
  const [email, setEmail] = useState('');
  const [showDone, setShowDone] = useState(false);

  const handleSubscribe = async () => {
    if (!email) return;
    var isAlreadyOnList = await isAlreadyOnMailingList(email);
    if(!isAlreadyOnList){
        await addToMailingList(email);
    }
    await sendSneakPeekEmail(email);
    setShowDone(true);
  };

  return (
    <section
      id="sneakpeek"
      className="w-full max-w-md mx-auto px-6 py-12 bg-[#0b1120] text-white rounded-lg shadow-lg"
    >
      <div className="flex items-center justify-center mb-4">
        <EnvelopeIcon className="w-8 h-8 text-white mr-2" />
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold">Get a Sneak Peek!</h2>
      </div>

      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6">
        Be the first to read a special preview of CJ Nehls’ next spicy romance.
        Drop your email below and we’ll send it straight to your inbox.
      </p>
      {showDone && <>Check your inbox!</>}
      {!showDone && (
        <form className="space-y-4" 
            onSubmit={(e) => {
            e.preventDefault();
            handleSubscribe();
            }}>
            <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full px-4 py-2 rounded bg-[#10172a] text-white placeholder-gray-400 border border-[#1e293b] focus:outline-none focus:ring-2 focus:ring-orange-400"
            />

            <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-500 text-black font-semibold py-2 px-4 rounded"
            >
            Subscribe
            </button>
        </form>
    )}
    </section>
  );
};

