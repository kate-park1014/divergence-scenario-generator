export const scenario_snowy_svalin_80_05 = {
	"scenario_id": "snowy_svalin_80_05",
	"order": 5,
	"act": "climax_finale",
	"theme": "snowy",
	"actors": {
		"anuk": {
			"id": "mon_8736797d-779a-4748-8633-d15c1eaf9be7",
			"name": {
				"korean": "아눅",
				"english": "Anuk",
				"japanese": "アヌーク",
				"chinese": "阿努克",
				"french": "Anuk",
				"spanish": "Anuk",
				"vietnamese": "Anuk",
				"thai": "อนุก",
				"hindi": "अनुक"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/19485274-e873-45c8-5043-f4ff65aa2a00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/9a79ecfd-8cc6-4461-3790-763822522500/public"
		}
	},
	"boss": {
		"pool_id": "pool_FrozenVoice_Svalin_V1"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"content": {
						"korean": "모든 단서가 하나의 진실을 가리켰다. 스발린은… 뿔피리가 아니었다.",
						"english": "All clues pointed to one truth. Svalinn was... not the Horn of Winter.",
						"japanese": "全ての証拠が一つの真実を指し示した。スヴァリンは…角笛ではなかった。",
						"chinese": "所有线索都指向一个真相。斯瓦林…不是号角。",
						"french": "Tous les indices pointaient vers une seule vérité. Svalinn n'était... pas la Corne d'Hiver.",
						"spanish": "Todas las pistas apuntaban a una verdad. Svalinn no era... el Cuerno de Invierno.",
						"vietnamese": "Mọi manh mối đều chỉ về một sự thật. Svalinn... không phải là Kèn Sừng.",
						"thai": "เบาะแสทั้งหมดชี้ไปที่ความจริงเดียว สวาลินน์... ไม่ใช่แตรเขาสัตว์",
						"hindi": "सभी सुराग एक ही सच की ओर इशारा कर रहे थे। स्वालिन... सींग का तुरही नहीं था।"
					},
					"speaker": "narrator",
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "이게… 고대 빙룡의 숨결이라고?",
						"english": "This is... the breath of the Ancient Ice Dragon?",
						"japanese": "これが…古代氷竜の息吹だと？",
						"chinese": "这就是…古代冰龙的气息？",
						"french": "C'est... le souffle de l'Ancien Dragon de Glace ?",
						"spanish": "¿Esto es... el aliento del Antiguo Dragón de Hielo?",
						"vietnamese": "Đây là... hơi thở của Cự Long Băng Cổ Đại?",
						"thai": "นี่คือ... ลมหายใจของมังกรน้ำแข็งโบราณอย่างนั้นหรือ?",
						"hindi": "यह... प्राचीन हिम ड्रैगन की सांस है?"
					},
					"emotion": "base"
				},
				{
					"action": "enter",
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						4,
						3
					]
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "이제야 깨달았나? 너무 늦었어.",
						"english": "Do you realize it now? It's too late.",
						"japanese": "今頃気づいたのか？手遅れだ。",
						"chinese": "现在才明白吗？太迟了。",
						"french": "Ce n'est que maintenant que tu le réalises ? Trop tard.",
						"spanish": "¿Ahora te das cuenta? Es demasiado tarde.",
						"vietnamese": "Giờ mới nhận ra sao? Quá muộn rồi.",
						"thai": "เพิ่งรู้ตัวรึไง? มันสายเกินไปแล้ว",
						"hindi": "अब समझ आया? बहुत देर हो चुकी है।"
					}
				},
				{
					"type": "speech",
					"content": {
						"korean": "그것은 스스로 침묵을 선택했다. 세상을 지키기 위해.",
						"english": "It chose silence itself. To protect the world.",
						"japanese": "それは自ら沈黙を選んだ。世界を守るために。",
						"chinese": "它选择了沉默。为了守护世界。",
						"french": "Il a choisi le silence de son plein gré. Pour protéger le monde.",
						"spanish": "Eligió el silencio por sí mismo. Para proteger el mundo.",
						"vietnamese": "Nó đã chọn sự im lặng. Để bảo vệ thế giới.",
						"thai": "มันเลือกที่จะเงียบงันด้วยตัวเอง เพื่อปกป้องโลก",
						"hindi": "उसने खुद चुप्पी चुनी। दुनिया की रक्षा के लिए।"
					},
					"speaker": "anuk",
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "happy",
					"content": {
						"korean": "그럼 우리가 이걸 풀어줘야 해!",
						"english": "Then we must set it free!",
						"japanese": "なら、私たちがこれを解放しなければ！",
						"chinese": "那我们必须解放它！",
						"french": "Alors nous devons le libérer !",
						"spanish": "¡Entonces debemos liberarlo!",
						"vietnamese": "Vậy thì chúng ta phải giải thoát nó!",
						"thai": "ถ้าอย่างนั้นเราก็ต้องปลดปล่อยมัน!",
						"hindi": "तो हमें इसे आज़ाद करना होगा!"
					},
					"speaker": "character_any"
				},
				{
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "어리석은 필멸자여. 침묵을 깨뜨리는 대가는 너무나 크다.",
						"english": "Foolish mortal. The price of breaking the silence is too great.",
						"japanese": "愚かなる定命の者よ。沈黙を破る代償はあまりにも大きい。",
						"chinese": "愚蠢的凡人。打破沉默的代价太过巨大。",
						"french": "Mortel insensé. Le prix à payer pour briser le silence est trop grand.",
						"spanish": "Mortal insensato. El precio de romper el silencio es demasiado alto.",
						"vietnamese": "Kẻ phàm trần ngu ngốc. Cái giá để phá vỡ sự im lặng là quá lớn.",
						"thai": "มนุษย์ผู้โง่เขลา ค่าตอบแทนของการทำลายความเงียบนั้นยิ่งใหญ่เกินไป",
						"hindi": "मूर्ख नश्वर। चुप्पी तोड़ने की कीमत बहुत ज़्यादा है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"speaker": "anuk",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"action": "enter"
				},
				{
					"emotion": "base",
					"speaker": "anuk",
					"content": {
						"korean": "이 숲의 오래된 맹세를 기억하라. 침묵은 봉인이자, 평화였다.",
						"english": "Remember the ancient oath of this forest. Silence was both a seal and peace.",
						"japanese": "この森の古き誓いを यादせよ。沈黙は封印であり、平和であった。",
						"chinese": "记住这片森林的古老誓言。沉默是封印，也是和平。",
						"french": "Souviens-toi du serment ancien de cette forêt. Le silence était à la fois un sceau et la paix.",
						"spanish": "Recuerda el antiguo juramento de este bosque. El silencio fue un sello y también paz.",
						"vietnamese": "Hãy nhớ lời thề cổ xưa của khu rừng này. Sự im lặng vừa là phong ấn, vừa là hòa bình.",
						"thai": "จงจำคำสาบานโบราณของป่าแห่งนี้ไว้ ความเงียบคือทั้งการผนึกและความสงบสุข",
						"hindi": "इस जंगल की पुरानी शपथ याद रखो। चुप्पी एक मुहर और शांति थी।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "하지만 스발린은 고통받고 있어.",
						"english": "But Svalinn is suffering.",
						"japanese": "しかし、スヴァリンは苦しんでいる。",
						"chinese": "但是斯瓦林正在受苦。",
						"french": "Mais Svalinn souffre.",
						"spanish": "Pero Svalinn está sufriendo.",
						"vietnamese": "Nhưng Svalinn đang chịu đựng.",
						"thai": "แต่สวาลินน์กำลังทนทุกข์",
						"hindi": "लेकिन स्वालिन पीड़ित है।"
					}
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "그것은 스스로 택한 운명. 침해하는 자, 파멸을 맞으리라.",
						"english": "It was a fate it chose itself. Those who violate it shall meet ruin.",
						"japanese": "それは自ら選んだ運命。侵す者、破滅を迎えるだろう。",
						"chinese": "这是它自己选择的命运。侵犯者，必将迎来毁灭。",
						"french": "C'est un destin qu'il a choisi. Ceux qui le violent connaîtront la ruine.",
						"spanish": "Fue un destino que eligió. Quienes lo violen se encontrarán con la ruina.",
						"vietnamese": "Đó là số phận nó đã tự chọn. Kẻ nào xâm phạm sẽ gặp diệt vong.",
						"thai": "มันคือโชคชะตาที่มันเลือกเอง ผู้ที่ละเมิดจะต้องพบกับความพินาศ",
						"hindi": "यह उसकी चुनी हुई नियति थी। उल्लंघन करने वालों को विनाश मिलेगा।"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "우리는 다른 길을 찾을 거야.",
						"english": "We will find another way.",
						"japanese": "私たちは別の道を見つける。",
						"chinese": "我们会找到另一条路。",
						"french": "Nous trouverons une autre voie.",
						"spanish": "Encontraremos otro camino.",
						"vietnamese": "Chúng ta sẽ tìm một con đường khác.",
						"thai": "เราจะหาทางอื่น",
						"hindi": "हम कोई और रास्ता निकालेंगे।"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"speaker": "anuk",
					"spot": [
						3,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "anuk",
					"content": {
						"korean": "너희의 '구원'이 세상에 재앙을 가져올 것이다.",
						"english": "Your 'salvation' will bring disaster upon the world.",
						"japanese": "お前たちの「救済」は世界に災いをもたらすだろう。",
						"chinese": "你们的“救赎”将给世界带来灾难。",
						"french": "Votre 'salut' apportera le désastre sur le monde.",
						"spanish": "Vuestra 'salvación' traerá el desastre al mundo.",
						"vietnamese": "Sự 'cứu rỗi' của các ngươi sẽ mang tai ương đến cho thế giới.",
						"thai": " 'ความรรอด' ของพวกเจ้าจะนำภัยพิบัติมาสู่โลก",
						"hindi": "तुम्हारी 'मुक्ति' दुनिया पर तबाही लाएगी।"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "우리는 믿어. 스발린을 해방하면 모든 것이 제자리를 찾을 거야.",
						"english": "We believe. If Svarin is freed, everything will fall into place.",
						"japanese": "我々は信じている。スバリンを解放すれば、すべてが元に戻る。",
						"chinese": "我们相信。如果斯瓦林被释放，一切都会归位。",
						"french": "Nous croyons. Si Svarin est libéré, tout se mettra en place.",
						"spanish": "Creemos. Si Svarin es liberado, todo encajará.",
						"vietnamese": "Chúng ta tin. Nếu Svarin được giải thoát, mọi thứ sẽ đâu vào đấy.",
						"thai": "เราเชื่อ ถ้าสวารินได้รับการปลดปล่อย ทุกสิ่งจะเข้าที่เข้าทาง",
						"hindi": "हम मानते हैं। यदि स्वारिन को आज़ाद कर दिया जाए, तो सब कुछ ठीक हो जाएगा।"
					},
					"speaker": "character_any"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "맹세를 저버리는 자, 그 무게를 감당치 못하리라.",
						"english": "He who breaks his oath shall not bear its weight.",
						"japanese": "誓いを破る者、その重みに耐えられぬだろう。",
						"chinese": "背弃誓言者，将无法承受其重。",
						"french": "Celui qui brise son serment n'en supportera pas le poids.",
						"spanish": "Quien rompa su juramento no soportará su peso.",
						"vietnamese": "Kẻ bội thề sẽ không gánh nổi trọng trách.",
						"thai": "ผู้ใดทรยศต่อคำสาบาน ผู้นั้นจะแบกรับน้ำหนักของมันไม่ได้",
						"hindi": "जो अपनी शपथ तोड़ता है, वह उसका भार नहीं सह पाएगा।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "그럴 리 없어.",
						"english": "That can't be.",
						"japanese": "そんなはずはない。",
						"chinese": "不可能。",
						"french": "Ce n'est pas possible.",
						"spanish": "Eso no puede ser.",
						"vietnamese": "Không thể nào.",
						"thai": "เป็นไปไม่ได้",
						"hindi": "ऐसा नहीं हो सकता।"
					},
					"emotion": "base"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"action": "enter",
					"duration_ms": 500,
					"type": "direction",
					"spot": [
						2,
						3
					],
					"speaker": "anuk"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "멈춰! 아직 기회는 있다. 이 길은 파멸로 향한다!",
						"english": "Stop! There's still a chance. This path leads to ruin!",
						"japanese": "止まれ！まだ間に合う。この道は破滅へと続く！",
						"chinese": "住手！还有机会。这条路通向毁灭！",
						"french": "Arrêtez ! Il y a encore une chance. Ce chemin mène à la ruine !",
						"spanish": "¡Detente! Todavía hay una oportunidad. ¡Este camino lleva a la ruina!",
						"vietnamese": "Dừng lại! Vẫn còn cơ hội. Con đường này dẫn đến diệt vong!",
						"thai": "หยุด! ยังมีโอกาส ถนนสายนี้จะนำไปสู่ความหายนะ!",
						"hindi": "रुको! अभी भी मौका है। यह रास्ता बर्बादी की ओर ले जाता है!"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "우린 이미 너무 멀리 왔어.",
						"english": "We've already come too far.",
						"japanese": "もう引き返せない。",
						"chinese": "我们已经走得太远了。",
						"french": "Nous sommes déjà allés trop loin.",
						"spanish": "Ya hemos llegado demasiado lejos.",
						"vietnamese": "Chúng ta đã đi quá xa rồi.",
						"thai": "เรามาไกลเกินไปแล้ว",
						"hindi": "हम पहले ही बहुत आगे आ चुके हैं।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "anuk",
					"content": {
						"korean": "너희의 무지가 세상을 집어삼킬 것이다. 기억하라… 침묵은, 속죄였다.",
						"english": "Your ignorance will swallow the world. Remember... silence was atonement.",
						"japanese": "お前たちの無知が世界を飲み込むだろう。覚えておけ…沈黙は、贖罪だった。",
						"chinese": "你们的无知将吞噬世界。记住……沉默，就是赎罪。",
						"french": "Votre ignorance engloutira le monde. Rappelez-vous... le silence était l'expiation.",
						"spanish": "Vuestra ignorancia engullirá el mundo. Recordad... el silencio fue expiación.",
						"vietnamese": "Sự ngu dốt của các ngươi sẽ nuốt chửng thế giới. Hãy nhớ… sự im lặng, chính là sự chuộc tội.",
						"thai": "ความไม่รู้ของพวกเจ้าจะกลืนกินโลก จงจำไว้...ความเงียบคือการชดใช้",
						"hindi": "तुम्हारी अज्ञानता दुनिया को निगल जाएगी। याद रखना... चुप्पी, प्रायश्चित्त थी।"
					}
				},
				{
					"type": "direction",
					"duration_ms": 400,
					"speaker": "anuk",
					"action": "exit",
					"direction": "down"
				},
				{
					"type": "speech",
					"content": {
						"korean": "스발린… 기다려!",
						"english": "Svarin... wait!",
						"japanese": "スバリン…待て！",
						"chinese": "斯瓦林……等等！",
						"french": "Svarin... attends !",
						"spanish": "¡Svarin... espera!",
						"vietnamese": "Svarin… đợi đã!",
						"thai": "สวาริน...เดี๋ยว!",
						"hindi": "स्वारिन... रुको!"
					},
					"speaker": "character_any",
					"emotion": "base"
				}
			]
		},
		{
			"lose_dialogue": [
				{
					"speaker": "boss",
					"content": {
						"korean": "너희의 무지가 나를 깨웠고, 세상은 그 대가를 치를 것이다.",
						"english": "Your ignorance awakened me. The world will pay the price.",
						"japanese": "貴様らの無知が私を目覚めさせた。世界はその代償を払うことになるだろう。",
						"chinese": "你们的无知唤醒了我，世界将为此付出代价。",
						"french": "Votre ignorance m'a réveillé. Le monde en paiera le prix.",
						"spanish": "Vuestra ignorancia me despertó. El mundo pagará el precio.",
						"vietnamese": "Sự ngu dốt của các ngươi đã đánh thức ta, và thế giới sẽ phải trả giá.",
						"thai": "ความโง่เขลาของพวกเจ้าปลุกข้าให้ตื่นขึ้น โลกจะต้องชดใช้ในสิ่งนี้",
						"hindi": "तुम्हारी अज्ञानता ने मुझे जगाया, और दुनिया इसकी कीमत चुकाएगी।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "아직… 끝나지 않았어. 우리는… 포기하지 않아!",
						"english": "It's not over yet... We won't give up!",
						"japanese": "まだ… 終わってない。我々は… 諦めない！",
						"chinese": "还没… 结束。我们… 不会放弃！",
						"french": "Ce n'est pas encore… fini. Nous n'abandonnerons… pas !",
						"spanish": "Aún… no ha terminado. ¡No… nos rendiremos!",
						"vietnamese": "Chưa… kết thúc. Chúng ta… không bỏ cuộc!",
						"thai": "ยัง… ไม่จบ เรา… ไม่ยอมแพ้!",
						"hindi": "अभी… खत्म नहीं हुआ है। हम… हार नहीं मानेंगे!"
					},
					"speaker": "character_any",
					"emotion": "angry"
				}
			],
			"win_dialogue": [
				{
					"emotion": "base",
					"speaker": "boss",
					"content": {
						"korean": "내가 침묵했던 이유는 종말을 막기 위함이었으나, 이제 그 침묵이 깨졌으니, 운명은 너희의 고향을 삼키리라.",
						"english": "I kept silent to avert the end, but now that silence is broken, fate shall devour your home.",
						"japanese": "「我の沈黙は終末を阻むためであったが、今やその沈黙は破られた。運命はお前たちの故郷を飲み込むだろう。」",
						"chinese": "「我之所以沉默，是为了阻止终结，但如今沉默已被打破，命运将吞噬你们的故乡。」",
						"french": "« Mon silence visait à empêcher la fin, mais maintenant qu'il est brisé, le destin dévorera votre foyer. »",
						"spanish": "« Guardé silencio para evitar el fin, pero ahora que ese silencio se ha roto, el destino devorará vuestro hogar. »",
						"vietnamese": "« Ta im lặng để ngăn chặn sự kết thúc, nhưng giờ đây sự im lặng ấy đã bị phá vỡ, số phận sẽ nuốt chửng quê hương các ngươi. »",
						"thai": "« ที่ข้าเงียบงันก็เพื่อยับยั้งจุดจบ แต่บัดนี้ความเงียบนั้นถูกทำลายลงแล้ว ชะตากรรมจะกลืนกินบ้านเกิดของพวกเจ้า »",
						"hindi": "« मेरी चुप्पी अंत को रोकने के लिए थी, लेकिन अब वह चुप्पी टूट गई है, नियति तुम्हारे घर को निगल जाएगी। »"
					},
					"type": "speech"
				},
				{
					"speaker": "boss",
					"content": {
						"korean": "나의 숨결은 이제 노래하리라, 세상의 마지막을.",
						"english": "My breath shall now sing the world's demise.",
						"japanese": "「我が息吹は今、世界の終焉を歌うだろう。」",
						"chinese": "「我的呼吸如今将歌唱世界的终结。」",
						"french": "« Mon souffle chantera désormais la fin du monde. »",
						"spanish": "« Mi aliento cantará ahora el fin del mundo. »",
						"vietnamese": "« Hơi thở của ta giờ đây sẽ hát về sự kết thúc của thế giới. »",
						"thai": "« ลมหายใจของข้าจะขับขานถึงจุดจบของโลก »",
						"hindi": "« मेरी साँस अब दुनिया के अंत का गीत गाएगी। »"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"content": {
						"korean": "이게… 우리가 원했던 해방이라고?",
						"english": "Is this... the liberation we desired?",
						"japanese": "「これが…我々が望んだ解放だと？」",
						"chinese": "「这……就是我们想要的解放吗？」",
						"french": "« C'est ça... la libération que nous désirions ? »",
						"spanish": "« ¿Es esto... la liberación que deseábamos? »",
						"vietnamese": "« Đây là... sự giải thoát mà chúng ta mong muốn sao? »",
						"thai": "« นี่หรือ... คือการปลดปล่อยที่เราต้องการ? »",
						"hindi": "« क्या यह... वही मुक्ति है जो हम चाहते थे? »"
					},
					"speaker": "character_any"
				},
				{
					"type": "speech",
					"emotion": "base",
					"content": {
						"korean": "거대한 빙룡의 형상이 허공에 흩어지며, 절규와 함께 세상의 끝을 알리는 노래가 시작되었다.",
						"english": "The form of the colossal ice dragon scattered into the void, and with a wail, the song announcing the world's end began.",
						"japanese": "「巨大な氷竜の姿が虚空に霧散し、絶叫と共に世界の終わりを告げる歌が始まった。」",
						"chinese": "「巨大的冰龙形体消散于虚空，伴随着绝望的尖叫，宣告世界末日的歌声开始了。」",
						"french": "« La forme du colossal dragon de glace se dispersa dans le vide, et avec un hurlement, le chant annonçant la fin du monde commença. »",
						"spanish": "« La forma del colosal dragón de hielo se dispersó en el vacío, y con un lamento, comenzó la canción que anunciaba el fin del mundo. »",
						"vietnamese": "« Hình dạng của băng long khổng lồ tan biến vào hư không, và cùng với một tiếng rên rỉ, bài ca báo hiệu ngày tận thế bắt đầu. »",
						"thai": "« รูปร่างของมังกรน้ำแข็งมหึมากระจายหายไปในความว่างเปล่า และพร้อมด้วยเสียงกรีดร้อง เพลงที่ประกาศถึงจุดจบของโลกก็เริ่มขึ้น »",
						"hindi": "« विशाल हिम ड्रैगन का रूप शून्य में बिखर गया, और एक चीख के साथ, दुनिया के अंत की घोषणा करने वाला गीत शुरू हो गया। »"
					},
					"speaker": "narrator"
				}
			],
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "봉인의 심장부. 거대한 얼음 수정체가 섬뜩한 빛을 내뿜었다.",
						"english": "The heart of the seal. A gigantic ice crystal emitted an eerie light.",
						"japanese": "封印の核心。巨大な氷の結晶が不気味な光を放っていた。",
						"chinese": "封印的核心。巨大的冰晶散发出诡异的光芒。",
						"french": "Le cœur du sceau. Un gigantesque cristal de glace émettait une lumière étrange.",
						"spanish": "El corazón del sello. Un gigantesco cristal de hielo emitía una luz espeluznante.",
						"vietnamese": "Trung tâm của phong ấn. Một khối tinh thể băng khổng lồ phát ra ánh sáng kỳ dị.",
						"thai": "ใจกลางของการผนึก ผลึกน้ำแข็งขนาดยักษ์ส่องแสงประหลาดออกมา",
						"hindi": "मुहर का दिल। एक विशाल बर्फीला क्रिस्टल एक अजीब रोशनी उत्सर्जित कर रहा था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"spot": [
						4,
						3
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "anuk",
					"action": "enter"
				},
				{
					"speaker": "anuk",
					"content": {
						"korean": "안 돼! 제발 멈춰! 이것은 해방이 아니야!",
						"english": "No! Please stop! This is not liberation!",
						"japanese": "だめだ！止めてくれ！これは解放じゃない！",
						"chinese": "不！请停下！这不是解放！",
						"french": "Non ! Arrêtez s'il vous plaît ! Ce n'est pas une libération !",
						"spanish": "¡No! ¡Por favor, detente! ¡Esto no es liberación!",
						"vietnamese": "Không! Làm ơn dừng lại! Đây không phải là sự giải thoát!",
						"thai": "ไม่! ได้โปรดหยุด! นี่ไม่ใช่การปลดปล่อย!",
						"hindi": "नहीं! कृपया रुक जाओ! यह मुक्ति नहीं है!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "비켜, 아눅! 우리가 스발린을 해방할 거야!",
						"english": "Out of the way, Anuk! We're freeing Svalinn!",
						"japanese": "「どけ、アヌーク！スヴァリンを解放するぞ！」",
						"chinese": "「让开，阿努克！我们要解放斯瓦林！」",
						"french": "« Pousse-toi, Anuk ! Nous allons libérer Svalinn ! »",
						"spanish": "« ¡Quítate, Anuk! ¡Vamos a liberar a Svalinn! »",
						"vietnamese": "« Tránh ra, Anuk! Chúng ta sẽ giải phóng Svalinn! »",
						"thai": "« หลีกไป อานุก! เราจะปลดปล่อยสวาลิน! »",
						"hindi": "« हट जाओ, अनूक! हम स्वालिन को मुक्त करेंगे! »"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "너희가 깨뜨리는 것은 속죄의 침묵이다!",
						"english": "What you break is the silence of atonement!",
						"japanese": "「お前たちが破るのは、贖罪の沈黙だ！」",
						"chinese": "「你们打破的是赎罪的沉默！」",
						"french": "« Ce que vous brisez est le silence de l'expiation ! »",
						"spanish": "« ¡Lo que rompéis es el silencio de la expiación! »",
						"vietnamese": "« Điều các ngươi phá vỡ là sự im lặng của chuộc tội! »",
						"thai": "« สิ่งที่พวกเจ้าทำลายคือความเงียบงันแห่งการชดใช้! »",
						"hindi": "« जो तुम तोड़ते हो, वह प्रायश्चित्त की खामोशी है! »"
					},
					"speaker": "anuk",
					"type": "speech"
				},
				{
					"speaker": "anuk",
					"type": "direction",
					"duration_ms": 400,
					"direction": "down",
					"action": "exit"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "…결국, 여기까지 왔어.",
						"english": "...So, it has come to this.",
						"japanese": "「…結局、ここまで来たか。」",
						"chinese": "「……终究，还是走到这一步了。」",
						"french": "« ...Finalement, nous voici. »",
						"spanish": "« ...Al final, hemos llegado hasta aquí. »",
						"vietnamese": "« ...Cuối cùng, cũng đến được đây. »",
						"thai": "« ...ในที่สุด ก็มาถึงจุดนี้แล้วสินะ »",
						"hindi": "« ...आखिरकार, हम यहाँ तक आ गए। »"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"content": {
						"korean": "거대한 수정체가 서서히 균열하기 시작했다. 얼음 틈새로 섬뜩한 비명이 울려 퍼졌다.",
						"english": "The massive crystal slowly began to crack. Eerie screams echoed through the icy fissures.",
						"japanese": "「巨大な結晶体が徐々にひび割れ始めた。氷の隙間から不気味な悲鳴が響き渡った。」",
						"chinese": "「巨大的水晶体开始缓缓龟裂。恐怖的尖叫声在冰隙中回荡。」",
						"french": "« L'énorme cristal commença lentement à se fissurer. Des cris lugubres résonnèrent à travers les fissures de glace. »",
						"spanish": "« El gigantesco cristal comenzó a agrietarse lentamente. Gritos espeluznantes resonaron a través de las fisuras heladas. »",
						"vietnamese": "« Khối pha lê khổng lồ bắt đầu nứt ra từ từ. Những tiếng hét rợn người vang vọng qua các khe nứt băng. »",
						"thai": "« ผลึกขนาดมหึมาเริ่มร้าวช้าๆ เสียงกรีดร้องน่าขนลุกก้องกังวานไปทั่วรอยแยกของน้ำแข็ง »",
						"hindi": "« विशाल क्रिस्टल धीरे-धीरे दरार पड़ने लगा। बर्फीली दरारों से भयानक चीखें गूँज उठीं। »"
					},
					"speaker": "narrator",
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "...어리석은 필멸자들이여, 너희는 해방이라 부르겠으나, 나는 이것을 속죄라 부르노라.",
						"english": "...Foolish mortals, you call this liberation, but I call it atonement.",
						"japanese": "「…愚かなる定命の者どもよ、お前たちはこれを解放と呼ぶだろうが、我はこれを贖罪と呼ぶ。」",
						"chinese": "「...愚蠢的凡人，你们称之为解放，我却称之为赎罪。」",
						"french": "« ...Mortels insensés, vous appelez cela libération, mais moi, je l'appelle expiation. »",
						"spanish": "« ...Mortales necios, vosotros lo llamáis liberación, mas yo lo llamo expiación. »",
						"vietnamese": "« ...Hỡi những kẻ phàm trần ngu ngốc, các ngươi gọi đây là sự giải thoát, nhưng ta gọi đây là sự chuộc tội. »",
						"thai": "« ...พวกมนุษย์ผู้โง่เขลา เจ้าเรียกสิ่งนี้ว่าการปลดปล่อย แต่ข้าเรียกมันว่าการชดใช้ »",
						"hindi": "« ...हे मूर्ख नश्वर प्राणियों, तुम इसे मुक्ति कहते हो, लेकिन मैं इसे प्रायश्चित्त कहता हूँ। »"
					},
					"speaker": "boss",
					"type": "speech"
				},
				{
					"type": "speech",
					"content": {
						"korean": "스발린…!",
						"english": "Svalinn...!",
						"japanese": "「スヴァリン…！」",
						"chinese": "「斯瓦林……！」",
						"french": "« Svalinn... ! »",
						"spanish": "« ¡Svalinn...! »",
						"vietnamese": "« Svalinn...! »",
						"thai": "« สวาลิน...! »",
						"hindi": "« स्वालिन...! »"
					},
					"speaker": "character_any",
					"emotion": "sad"
				}
			],
			"id": 15
		}
	],
	"epilogue": {
		"korean": [
			"침묵은 깨졌다. 그리고 세상은 새로운 노래를 듣기 시작했다.",
			"그것은 비명이었다. 영원히 얼어붙었던 심장이 다시 뛰기 시작한 대가.",
			"탐험대는 승리했지만, 그들의 손에 남은 것은 파멸의 씨앗이었다.",
			"구원이었을까, 아니면 파멸의 서곡이었을까.",
			"설원 위로, 차가운 바람만이 속삭였다. 이제 시작이라고."
		],
		"english": [
			"The silence was broken. And the world began to hear a new song.",
			"It was a scream. The price for a heart, long frozen, to beat anew.",
			"The expedition triumphed, yet in their hands remained the seeds of ruin.",
			"Was it salvation, or merely the overture to ruin?",
			"Across the snowfield, only the cold wind whispered: 'It begins now.'"
		],
		"japanese": [
			"沈黙は破られた。そして世界は、新たな歌を聴き始めた。",
			"それは悲鳴だった。永遠に凍りついていた心臓が再び鼓動を始めた代償。",
			"探検隊は勝利したが、彼らの手に残されたのは破滅の種だった。",
			"それは救済だったのか、それとも破滅の序曲だったのか。",
			"雪原の上を、冷たい風だけが囁いた。『今から始まる』と。"
		],
		"chinese": [
			"沉默被打破了。世界开始聆听一首新的歌。",
			"那是一声尖叫。是冰封已久的心脏重新跳动所付出的代价。",
			"探险队取得了胜利，然而他们手中剩下的，却是毁灭的种子。",
			"是救赎，抑或是毁灭的序曲？",
			"雪原之上，只有寒风低语：“现在，才刚刚开始。”"
		],
		"french": [
			"Le silence fut brisé. Et le monde commença à entendre un nouveau chant.",
			"C'était un hurlement. Le prix à payer pour qu'un cœur, gelé depuis l'éternité, batte à nouveau.",
			"L'expédition triompha, mais entre leurs mains ne restaient que les graines de la ruine.",
			"S'agissait-il du salut, ou simplement de l'ouverture de la ruine ?",
			"Sur l'étendue enneigée, seul le vent froid murmura : 'Ça commence maintenant.'"
		],
		"spanish": [
			"El silencio se rompió. Y el mundo empezó a escuchar una nueva canción.",
			"Fue un grito. El precio para que un corazón, eternamente congelado, volviera a latir.",
			"La expedición triunfó, pero en sus manos quedaron las semillas de la ruina.",
			"¿Fue la salvación, o solo la obertura de la ruina?",
			"Sobre el campo nevado, solo el viento frío susurró: 'Ahora comienza'."
		],
		"vietnamese": [
			"Sự im lặng bị phá vỡ. Và thế giới bắt đầu lắng nghe một bài hát mới.",
			"Đó là một tiếng hét. Cái giá cho một trái tim đã đóng băng vĩnh viễn, đập trở lại.",
			"Đội thám hiểm đã thắng, nhưng trong tay họ chỉ còn lại hạt giống của sự hủy diệt.",
			"Đó là sự cứu rỗi, hay chỉ là khúc dạo đầu của sự hủy diệt?",
			"Trên cánh đồng tuyết, chỉ có cơn gió lạnh thì thầm: 'Bây giờ mới bắt đầu'."
		],
		"thai": [
			"ความเงียบถูกทำลายลง โลกเริ่มได้ยินบทเพลงบทใหม่",
			"มันคือเสียงกรีดร้อง ค่าตอบแทนของการที่หัวใจที่เคยแข็งเป็นน้ำแข็งชั่วนิรันดร์กลับมาเต้นอีกครั้ง",
			"คณะสำรวจได้รับชัยชนะ แต่สิ่งที่หลงเหลืออยู่ในมือของพวกเขาคือเมล็ดพันธุ์แห่งความพินาศ",
			"มันคือการไถ่บาป หรือเป็นเพียงโหมโรงแห่งความพินาศกันแน่",
			"เหนือทุ่งหิมะ มีเพียงสายลมหนาวที่กระซิบว่า 'ตอนนี้แหละคือจุดเริ่มต้น'"
		],
		"hindi": [
			"खामोशी टूट गई। और दुनिया ने एक नया गाना सुनना शुरू कर दिया।",
			"वह एक चीख थी। एक ऐसे हृदय की कीमत, जो लंबे समय से जमा हुआ था, अब फिर से धड़कने लगा था।",
			"अभियान सफल रहा, फिर भी उनके हाथों में विनाश के बीज रह गए।",
			"क्या यह मुक्ति थी, या केवल विनाश की प्रस्तावना?",
			"बर्फ के मैदान पर, केवल ठंडी हवा ने फुसफुसाया: 'अब शुरू होता है।'"
		]
	},
	"prologue": {
		"korean": [
			"영원한 얼음 속, 고대 빙룡의 숨결이 잠들어 있었다.",
			"뿔피리라 불리던 침묵의 결정체.",
			"어리석은 인간들은 그것이 재앙의 근원이라 믿었지.",
			"하지만 진실은, 언제나 가장 비극적인 형태로 다가온다.",
			"그들의 '해방'은 곧, 세상의 마지막을 노래하는 서곡이었다."
		],
		"english": [
			"Deep within eternal ice, the ancient Ice Dragon's breath lay dormant.",
			"A silent crystal, dubbed 'The Horn'.",
			"Foolish mortals believed it to be the source of calamity.",
			"But truth always arrives in its most tragic form.",
			"Their 'liberation' was merely the prelude to the world's end."
		],
		"japanese": [
			"永遠の氷の中、古の氷竜の息吹が眠っていた。",
			"角笛と呼ばれた、沈黙の結晶体。",
			"愚かな人間たちは、それが災厄の根源だと信じていた。",
			"しかし真実は、常に最も悲劇的な形で訪れる。",
			"彼らの『解放』は、世界の終わりを告げる序曲に過ぎなかった。"
		],
		"chinese": [
			"在永恒的冰层深处，古老冰龙的吐息沉睡着。",
			"一个被称为“号角”的沉默结晶。",
			"愚蠢的凡人认为它是灾难的根源。",
			"但真相，总是以最悲剧的形式降临。",
			"他们的“解放”，很快就成了唱响世界末日的序曲。"
		],
		"french": [
			"Au cœur des glaces éternelles, le souffle de l'ancien Dragon de Glace sommeillait.",
			"Un cristal silencieux, surnommé 'La Corne'.",
			"Les mortels insensés croyaient qu'il était la source de la calamité.",
			"Mais la vérité, elle, arrive toujours sous sa forme la plus tragique.",
			"Leur 'libération' n'était que le prélude au chant de la fin du monde."
		],
		"spanish": [
			"En el hielo eterno, el aliento del antiguo Dragón de Hielo yacía dormido.",
			"Un cristal silencioso, llamado 'El Cuerno'.",
			"Los tontos mortales creyeron que era la fuente de la calamidad.",
			"Pero la verdad, siempre llega en su forma más trágica.",
			"Su 'liberación' fue, en realidad, el preludio al fin del mundo."
		],
		"vietnamese": [
			"Trong băng vĩnh cửu, hơi thở của Rồng Băng cổ đại đã ngủ yên.",
			"Một tinh thể im lặng, được gọi là 'Cái Sừng'.",
			"Những kẻ phàm trần ngu ngốc tin rằng nó là nguồn gốc của tai ương.",
			"Nhưng sự thật, luôn đến dưới hình thức bi thảm nhất.",
			"‘Sự giải phóng’ của họ, chẳng qua là khúc dạo đầu cho ngày tận thế."
		],
		"thai": [
			"ลึกเข้าไปในน้ำแข็งนิรันดร์ ลมหายใจของมังกรน้ำแข็งโบราณหลับใหลอยู่",
			"ผลึกแห่งความเงียบงัน ที่ถูกขนานนามว่า 'เขาสัตว์'",
			"มนุษย์ผู้โง่เขลาเชื่อว่ามันคือต้นกำเนิดของหายนะ",
			"แต่ความจริง มักจะมาในรูปแบบที่น่าเศร้าที่สุดเสมอ",
			"‘การปลดปล่อย’ ของพวกเขา แท้จริงแล้วคือบทนำสู่จุดจบของโลก"
		],
		"hindi": [
			"अनंत बर्फ की गहराइयों में, प्राचीन हिम ड्रैगन की साँस सुप्त थी。",
			"एक खामोश क्रिस्टल, जिसे 'सींग' कहा जाता था।",
			"मूर्ख इंसानों ने इसे आपदा का स्रोत माना।",
			"परंतु सत्य, हमेशा अपने सबसे दुखद रूप में आता है।",
			"उनकी 'मुक्ति', जल्द ही दुनिया के अंत का गायन करने वाली प्रस्तावना थी।"
		]
	}
} as const;
